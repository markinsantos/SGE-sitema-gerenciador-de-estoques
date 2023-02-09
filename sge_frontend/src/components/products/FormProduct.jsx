import Select from "../templates/Select"

const Formulario = ({ botao, evento, cadastrar, obj, cancelar, remover, alterar }) => {


    const renderFormulario = () => {

        return (

            <form>
                <div className="form">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Nome do produto</label>
                                <input type="text" onChange={evento}
                                    value={obj.nome} name='nome'
                                    placeholder='Digite o nome do produto...'
                                    className='form-control' />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <label>Descrição</label>
                            <input type="text" onChange={evento}
                                value={obj.marca} name='marca'
                                placeholder='Descrição do produto...'
                                className='form-control' />

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label>Categoria</label>
                            <Select></Select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label>Quantidade</label>
                            <input type="number" onChange={evento}
                                value={obj.qtde} name='marca'
                                placeholder='Digite a Quantidade...'
                                className='form-control' />

                        </div>
                        
                    </div>
                    {
                            botao
                                ?
                                <div> 
                                    <input type="button" onClick={cadastrar} value="cadastrar" className='btn btn-primary ml-3' />
                                    <input type="button" onClick={cancelar} value="cancelar" className='btn btn-warning ml-3' />
                                </div>
                                :
                                <div>
                                    <button className="btn btn-success ml-2"
                                        onClick={alterar}>
                                        <i className="fa fa-save"> Salvar</i>
                                    </button>
                                    <button onClick={remover} 
                                        className='btn btn-danger ml-2' >
                                        <i className="fa fa-trash"> Excluir</i>
                                    </button>
                                    <input type="button" onClick={cancelar}
                                        value="Cancelar" className='btn btn-secondary ml-2' />
                                </div>
                        }

                </div>

            </form>
        )

    }


    return (
        renderFormulario()

    )
}

export default Formulario;