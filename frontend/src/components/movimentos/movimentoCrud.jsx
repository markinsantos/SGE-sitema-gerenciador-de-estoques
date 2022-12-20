import React, {Component} from 'react'

import Main from '../template/Main'

const headerProps = {
    icon: 'calendar',
    title: 'Movimentos',
    subtitle: 'Cadastro de Movimentos diarios do estoque: Entradas e Saidas'
}

export default class MovimentoCrud extends Component{
    render() {
        return (
            <Main {...headerProps}>
                Movimentos
            </Main>
        )
    }

}