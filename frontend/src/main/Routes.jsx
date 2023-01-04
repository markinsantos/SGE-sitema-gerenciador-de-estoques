import React from 'react'
import { useContext, Fragment } from 'react'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from '../components/home/Home'
import ProdutoCrud from '../components/produtos/ProdutoCrud'
import MovimentoCrud from '../components/movimentos/movimentoCrud';
import UserCrud from '../components/users/UserCrud';
import Login from '../components/login/Login';
//import { AuthContext } from '../components/context/auth';
import { AuthProvider, AuthContext } from '../components/context/auth';

   
const RoutesApp = () =>{

    const Private=({children})=>{
        const{authenticated, loading} = useContext(AuthContext);
        if(loading){
            return <div className='loading'>Carregando...</div>
        }
        
        if(!authenticated){
            return < Navigate to="/login"/>
        }
        return children
    }    
   
    return(
    <BrowserRouter>
         <Fragment>
         <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Private>
                    <Home/>
                    </Private>} />
                <Route exact path="/login" element={<Login/>} />
                <Route path="/produtos" element={<ProdutoCrud/>} />
                <Route path="/movimentos" element={<MovimentoCrud/>} />
                <Route path="/users" element={<UserCrud/>} />
                <Route path="*" element={<Home/>} />
            </Routes>
        </AuthProvider>
        </Fragment>
    </BrowserRouter>
    )
}
//export default RoutesApp;

    

   
/*export default props =>

  <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route path="/produtos" element={<ProdutoCrud/>} />
                <Route path="/movimentos" element={<MovimentoCrud/>} />
                <Route path="/opcoes" element={<OpcaoCrud/>} />
                <Route path="*" element={<Home/>} />
            </Routes>
        </Fragment>
    </BrowserRouter>*/


//}


export default RoutesApp

    
