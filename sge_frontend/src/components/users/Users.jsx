import Main from "../templates/Main";
import React from "react";

const User = () => {

    
    return (
        <Main icon="users" title="Usuarios"
                subtitle="Usuarios do Sistema de Estoque do CFT">
                <div className='display-4'>Usuarios!</div> 
                <hr />
                <p className='mb-0'>Usuarios do sistema</p>   
        </Main>
    )
}

export default User;