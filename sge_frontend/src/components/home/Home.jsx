import Main from "../templates/Main";
import React from "react";

const Home = () => {

    
    return (
        <Main icon="home" title="Inicio"
                subtitle="Sistema gerenciador de Estoque">
                <div className='display-4'>Bem vindo!</div> 
                <hr />
                <p className='mb-0'>Sistema Gerenciador de Estoque do CFT</p>   
        </Main>
    )
}

export default Home;