import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { Outlet } from 'react-router';
import { auth } from '../firebase.init';

export const authContext = createContext()

const Root = () => {

const signUpContext=(email, password) =>{
    return    createUserWithEmailAndPassword(auth, email, password)
    
}


const loginContext = (email, password) =>{
    return   signInWithEmailAndPassword(auth, email, password)
}


const handleLogout = () => {
    
    signOut(auth).then(() => {
        // 
        console.log("Sign-out successful.")
    }).catch((error) => {
        // An error happened.
    });
    
}

const values={
    signUpContext,
    loginContext,
    handleLogout
}

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         console.log(user)
        } 
      });
},[])

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <authContext.Provider value={values} >
            <Outlet></Outlet>
            </authContext.Provider>
        </div>
    );
};

export default Root;