import { createContext, useContext, useState } from "react";
import React from 'react';
import { Navigate,useLocation } from 'react-router-dom'

const Acontext=createContext(null)

export const AuthProvider=({children})=>{
    const [user,setUser]=useState({})

    const login=(user)=>{
        setUser(user)
    }
    const logout=()=>{
        setUser({})   
    }
    return(<Acontext.Provider value={{user, login ,logout}}>
        {children}
    </Acontext.Provider>)

} 
export const useAuth=()=>{
    return useContext(Acontext)
}