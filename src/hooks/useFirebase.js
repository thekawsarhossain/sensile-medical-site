import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, GithubAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // auth 
    const auth = getAuth();
    // providers 
    const googleProvider = new GoogleAuthProvider();
    const gitHubAuthProvider = new GithubAuthProvider();

    // signin with google here
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setError('');
            })
            .catch(error => setError(error.message))
    }

    // signin with github here 
    const signInWithGitHub = () => {
        signInWithPopup(auth, gitHubAuthProvider)
            .then(result => {
                setUser(result.user)
                setError('');
            })
            .catch(error => setError(error.message))
    }

    // sign in With Email And Password 
    const signInWithInput = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('');
            })
            .catch(error => setError(error.message))
    }

    // sign up with input here 
    const signUpWithInput = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(error => setError(error.message))
    }

    // getting the current user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    // signout user here 
    const signOutUser = () => {
        signOut(auth).then(() => { })
            .catch(error => setError(error.message))
    }

    // return here 
    return {
        user,
        error,
        signInWithGoogle,
        signInWithGitHub,
        signUpWithInput,
        signInWithInput,
        signOutUser,
        setError
    }
}

export default useFirebase;