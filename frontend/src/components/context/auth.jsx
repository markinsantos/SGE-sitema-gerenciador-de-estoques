import React, {createContext} from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, stUser] = useState(null);

    const login = (email, password) =>{

        console.log("login Auth",{email, password})
            if(password === '123'){
            stUser({id:"123",email})
            navigate("/")
        }}

       

    const logout =()=>{
        console.log("logout")
        stUser(null)
        navigate("/login")
    }

    return(
        <AuthContext.Provider
         value={{authenticated:!!user,user,login,
         logout}}>
            {children}
        </AuthContext.Provider>
    )
}