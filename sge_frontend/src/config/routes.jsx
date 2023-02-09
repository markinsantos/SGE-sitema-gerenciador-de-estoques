
import React from 'react'
import { useContext, Fragment } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../components/home/Home';
import Moviments from '../components/moviments/Moviments';
import Products from '../components/products/Products';
import User from '../components/users/Users';
import Login from '../components/login/Login';
import { AuthProvider, AuthContext } from '../context/auth'


const RoutesApp =() =>{

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);
        if (loading) {
            return <div className='loading'>Carregando...</div>
        }

        if (!authenticated) {
            return < Navigate to="/login" />
        }
        return children
    }

    return(
        <BrowserRouter>
            <Fragment>
                <AuthProvider>
                        <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/" element={
                        <Private><Home /></Private>
                        } />
                        <Route path='/produtos' element={
                        <Private><Products/></Private>
                        }/>
                        <Route path="/movimentos" element={<Moviments />} />
                        <Route path="/usuarios" element={<User />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </AuthProvider>
            </Fragment>
        </BrowserRouter>
    )

}
export default RoutesApp