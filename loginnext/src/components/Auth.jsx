import { createContext, useContext, useState } from "react";
import React from 'react';

const Acontext=createContext(null)

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [passw,setPassw]=useState(null)

    const login=(user,passw)=>{
        setUser(user)
        setPassw(passw)
    }
    const logout=()=>{
        setUser(null)
        setPassw(null)
        
    }
    return(<Acontext.Provider value={{user, passw, login ,logout}}>
        {children}
    </Acontext.Provider>)

} 
export const useAuth=()=>{
    return useContext(Acontext)
}