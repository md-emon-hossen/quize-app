import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}


//context procaider
export function AuthProvaider({ children }) {

    const [loding, setloding] = useState(true);
    const [currentUser, setcurrentUser] = useState();


    useEffect(() => {
        const auth = getAuth();
        const unsubsrice = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);
            setloding(false);
            return unsubsrice;
        })
    }, [])


    //signup function
    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username
        })

        const user = auth.currentUser;
        setcurrentUser({
            ...user
        });
    }


    //login funciton
    async function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }


    //logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signup,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={value}>
            {!loding && children}
        </AuthContext.Provider>
    )
}