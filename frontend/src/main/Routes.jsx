import React from 'react'
//import { Switch, Route, Redirect } from 'react-router'
import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home'
import ProdutoCrud from '../components/produtos/ProdutoCrud'
import MovimentoCrud from '../components/movimentos/movimentoCrud';
import OpcaoCrud from '../components/opcao/opcaoCrud';

export default props => 
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/produtos" element={<ProdutoCrud/>} />
        <Route path="/movimentos" element={<MovimentoCrud/>} />
        <Route path="/opcoes" element={<OpcaoCrud/>} />
        <Route path="*" element={<Home/>} />
    </Routes>