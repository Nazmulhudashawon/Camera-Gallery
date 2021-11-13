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
} from 'firebase/auth';

initializeFirebase();
const useFirebase = () => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isloading, setIsloading] = useState(true);
  const [autherror, setAutherror] = useState('');
  const auth = getAuth();

  const register = (email, password, history) => {
    setIsloading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setAutherror('');
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
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
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

  return {
    user,
    isloading,
    register,
    login,
    googleSignin,
    logOut,
    autherror,
  };
};
export default useFirebase;
