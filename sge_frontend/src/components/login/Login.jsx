import React from 'react'
import { useState, useContext } from "react";
import { AuthContext } from '../../context/auth';
import imgLogo from '../../assets/images/logo.png'
import './Login.css'


const Login =()=> {

const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password });
    login(email, password)

  }

  return (
    <div className="container-login">
      
      <div className="wrap-login">
        <form className="login-form" onSubmit={handleSubmit}>
          <span className="login-form-title"> Bem vindo </span>

          <span className="login-form-title">
            <img src={imgLogo} alt="Jovem Programador" />
          </span>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <a className="txt2" href="#">
              Criar conta
            </a>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login