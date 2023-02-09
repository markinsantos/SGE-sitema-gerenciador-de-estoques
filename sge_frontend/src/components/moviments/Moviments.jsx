import Main from "../templates/Main";
import React from "react";

const Moviments = () => {

    
    return (
        <Main icon="calendar" title="Movimentos"
                subtitle="Movimentos de Estoque do CFT">
                <div className='display-4'>Movimentos!</div> 
                <hr />
                <p className='mb-0'>Movimentos do Estoque</p>   
        </Main>
    )
}

export default Moviments;