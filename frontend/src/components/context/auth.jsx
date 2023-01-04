import React, {createContext, useEffect} from "react";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, stUser] = useState(null);
    const [loading, setloading] = useState(true)

    useEffect(() =>{
        const recoveredUser = localStorage.getItem('user')
        if(recoveredUser){
            stUser(JSON.parse(recoveredUser))
        }
        setloading(false)
    },[])

    const login = (email, password) =>{
        console.log("login Auth",{email, password})

            
        const loggedUser = {
            id: "123",
            email
        }

        localStorage.setItem("user",JSON.stringify(loggedUser))
            if(password ==='teste'){
                stUser(loggedUser); 
                navigate("/");
        }}

       

    const logout =()=>{
        console.log("logout")
        localStorage.removeItem("user")
        stUser(null)
        navigate("/login")
    }

    return(
        <AuthContext.Provider
         value={{authenticated:!!user,user,loading,login,
         logout}}>
            {children}
        </AuthContext.Provider>
    )
}