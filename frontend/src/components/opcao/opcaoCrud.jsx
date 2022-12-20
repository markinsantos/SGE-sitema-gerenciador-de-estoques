import React, {Component} from 'react'

import Main from '../template/Main'

const headerProps = {
    icon: 'bars',
    title: 'Opções',
    subtitle: 'Configurações Personalizadas do Sistema'
}

export default class OpcaoCrud extends Component{
    render() {
        return (
            <Main {...headerProps}>
                Configuracao
            </Main>
        )
    }

}