import './Logo.css'
import logo from '../../assets/imgs/a.png'
import React from 'react'
//import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <a href="/" className='logo'>
            <img src={logo} alt="logo" />
        </a>
    </aside>