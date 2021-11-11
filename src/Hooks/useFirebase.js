import { useState,useEffect } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";


initializeFirebase();
const useFirebase=()=>{
    const [user, setUser]=useState({})
    const [isloading, setIsloading]=useState(true)
    const [autherror, setAutherror]=useState('')
    const auth = getAuth();

    const register=(email, password)=>{
      console.log(email, password)
      createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    console.log(result)
    setAutherror('')
  })
  .catch((error) => {
    console.log(error.message)
    setAutherror(error.message)
  }).finally(()=>setIsloading(false));
    }
    //login function
    const login=(email,password,location, history)=>{
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const destination=location?.state?.from ||"/"
    history.replace(destination)

    setAutherror('')

  })
  .catch((error) => {
    const errorCode = error.code;
    setAutherror(error.message)
  }).finally(()=>setIsloading(false));;
    }

    //sign-out function
    const logOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            console.log(error.message)
          }).finally(()=>setIsloading(false));;
    }

    // observer user state
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user);
          } else {
              setUser({})
          }
         setIsloading(false);
          
      });
      return () => unsubscribed;
  }, [])
    
    return{
        user,
        isloading,
        register,
        login,
        logOut,
        autherror
    }

}
export default useFirebase;