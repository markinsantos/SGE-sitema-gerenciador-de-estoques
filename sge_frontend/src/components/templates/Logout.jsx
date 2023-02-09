import React, {useContext}from 'react'
import { AuthContext } from '../../context/auth'
import imgBtn from '../../assets/images/sair.png'

const Logout = () => {
const { logout } = useContext(AuthContext)

const handleLogout = () => {
    logout()
}

    return (
        <button className="btn btn-outline-light mt-3" onClick={handleLogout}><img src={imgBtn} alt="teste" /></button>
        
    )
}

export default Logout;
