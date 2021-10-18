import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // auth 
    const auth = getAuth();
    // providers 
    const googleProvider = new GoogleAuthProvider();

    // signin with google here
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                setError('');
            })
            .catch(error => setError(error.message))
    }

    // getting the current user 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setError('some error occurred !');
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
        signOutUser
    }
}

export default useFirebase;