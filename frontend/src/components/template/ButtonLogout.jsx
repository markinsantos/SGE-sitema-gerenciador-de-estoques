import React, {useContext}from 'react'
import { AuthContext } from '../context/auth';

const ButtonLogout = () => {

    const {logout } = useContext(AuthContext)
    const handleLogout = () =>{
        logout()

    }

    return(
        <div>
           <button className="btn" onClick={handleLogout}>Sair</button>
        </div>
    )

}

export default ButtonLogout;