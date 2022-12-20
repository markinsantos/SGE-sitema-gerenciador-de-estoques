import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'sliders',
    title: 'Produtos',
    subtitle: 'Cadastro de Produtos: Incluir Alterar e Excluir'
}
const baseUrl = 'http://localhost:3001/produtos'
const initialState = {
    produto: {name:'', quantidade:0},
    list:[]
}

export default class ProdutoCrud extends Component{
    state = {...initialState}

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear(){
        this.setState({produto: initialState.produto})
    }

    save(){
        const produto = this.state.produto
        const method = produto.id ? 'put':'post'
        const url = produto.id ? `${baseUrl}/${produto.id}` : baseUrl
        axios[method](url,produto)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({produto: initialState.produto, list})
            this.clear()
        })
    }

    getUpdatedList(produto, add=true){
        const list = this.state.list.filter(u => u.id !== produto.id)
        if(add) list.unshift(produto)
        return list
    }

    updateField(event) {
        const produto = {...this.state.produto}
        produto[event.target.name] = event.target.value
        this.setState({produto})
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome do Produto</label>
                            <input type="text" className='form-control'
                            name='name' value={this.state.produto.name}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o nome do produto..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Quantidade</label>
                            <input type="number" className='form-control'
                            name='quantidade' value={this.state.produto.quantidade}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite a Quantidade..."/>
                        </div>
                    </div>

                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                        onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className='btn btn-secondary ml-2'
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(produto) {
        this.setState({ produto})
    }

    remove(produto) {
        axios.delete(`${baseUrl}/${produto.id}`).then(resp => {
            const list = this.getUpdatedList(produto, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Quatidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.name}</td>
                    <td>{produto.quantidade}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(produto)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(produto)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }

}