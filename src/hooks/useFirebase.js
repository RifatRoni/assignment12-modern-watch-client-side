import { useState, useEffect } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import initializeAuthentication from "../pages/Login/Login/Firebase/Firebase.init";



initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userProfile, setUserProfile] = useState({});

    // get all provider
    const googleProvider = new GoogleAuthProvider();

    // get all function to sign in with provider
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // login user with email and password
    const signInWithEmail_Password = () => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // create user with email and password
    const signUpWithEmail_Password = () => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user profile
    const updateUserProfile = () => {
        updateProfile(auth.currentUser, userProfile);
    };

    // for logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // for auto state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [auth]);

    // for using it in another file
    return {
        user,
        auth,
        error,
        setError,
        setEmail,
        setPassword,
        setUserProfile,
        updateProfile,
        signInWithGoogle,
        signInWithEmail_Password,
        signUpWithEmail_Password,
        updateUserProfile,
        logout,
    };
};

export default useFirebase;