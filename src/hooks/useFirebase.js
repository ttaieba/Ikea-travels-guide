import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAthentication from "../Firebase/Firebase.init";

// -----------------------------------------all links

initializeAthentication()
// firebase athentications main work-------------

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const [error, setError] = useState("")


    // google athentic

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    const signInUingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)


    }


    // onchange-----


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user is', user)
                setUser(user)
            } else {
                // User is signed out
                // ...
            }
            setIsLoading(false)
        });
    }, [])

    // logout ---

    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))

    }
    // return all 
    return {
        user,
        isLoading,
        signInUingGoogle,
        error,
        logout


    }

}



export default useFirebase;