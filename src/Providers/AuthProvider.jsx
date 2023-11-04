import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "./../firebase/firebase.config";
  
  
  export const AuthContext = createContext(null);
  const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    /* create user with email and password */
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    /* sign in with email and password */
  
    const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    /* set user name  */
    const setUserName = (name) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
      });
    };
  
    /* ser user profile picture */
    const setProfilePicture = (userPic) => {
      return updateProfile(auth.currentUser, {
        photoURL: userPic,
      });
    };
  
  
    /* logOut */
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
    
  
    /*  on auth state change  */
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    console.log(user);
  
  
    
    /* all exports  */
    const allExports = {
      user,
      createUser,
      logIn,
      loading,
      logOut,
      setUserName,
      setProfilePicture,
    };
    return (
      <AuthContext.Provider value={allExports}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  