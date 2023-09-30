import { createContext, useContext, useState } from "react";
import React from 'react';

const Acontext=createContext(null)

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)

    const login=(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser(null)    
    }
    return(<Acontext.Provider value={{user, login ,logout}}>
        {children}
    </Acontext.Provider>)

} 
export const useAuth=()=>{
    return useContext(Acontext)
}