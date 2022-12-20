import React, {Component} from 'react'

import Main from '../template/Main'

const headerProps = {
    icon: 'sliders',
    title: 'Produtos',
    subtitle: 'Cadastro de Produtos: Incluir Alterar e Excluir'
}

export default class ProdutoCrud extends Component{
    render() {
        return (
            <Main {...headerProps}>
                teste
            </Main>
        )
    }

}