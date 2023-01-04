import './Nav.css'
import React from 'react'
//import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            <a href="/">
                <i className='fa fa-home'></i> Início
            </a>
            <a href="/produtos">
                <i className='fa fa-sliders'></i> Produtos
            </a>
            <a href="/movimentos">
                <i className='fa fa-calendar'></i> Movimentos
            </a>
            <a href="/users">
                <i className='fa fa-users'></i> Usuarios
            </a>
        </nav>
    </aside>