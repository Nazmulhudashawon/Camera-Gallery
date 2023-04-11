import { useState, useEffect } from 'react';
import initializeFirebase from '../Firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile, 
  getIdToken,
} from 'firebase/auth';

initializeFirebase();
const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  console.log(user)
  const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
  const [isloading, setIsloading] = useState(true);
  const [autherror, setAutherror] = useState('');
  const auth = getAuth();

  const register = (email, password, name, history) => {
    setIsloading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setAutherror('');
        const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
        history.replace("/");
      })
      .catch((error) => {
        console.log(error.message);
        setAutherror(error.message);
      })
      .finally(() => setIsloading(false));
  };
  //email pass login function
  const login = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const destination = location?.state?.from || '/';
        history.replace(destination);

        setAutherror('');
      })
      .catch((error) => {
        const errorCode = error.code;
        setAutherror(error.message);
      })
      .finally(() => setIsloading(false));
  };

  //google signin
  const googleSignin = (location, history) => {
    setIsloading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
       
        saveUser(user.email, user.displayName, 'PUT');

       
        setAutherror('');
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        console.log(error.message);

        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };


  useEffect(() => {
    fetch(`https://camerabuzz.onrender.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])

  //sign-out function
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsloading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsloading(false);
    });
    return () => unsubscribed;
  }, []);

  //save user to db
  const saveUser=(email, displayName, method)=>{
    const user = { email, displayName };
    fetch('https://camerabuzz.onrender.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}


  return {
    user,
    isloading,
    register,
    login,
    googleSignin,
    logOut,
    autherror,
    admin,
    token,
  };
};
export default useFirebase;
