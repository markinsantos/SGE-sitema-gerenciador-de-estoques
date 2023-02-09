const Tabela = ({ vetor, selecionar}) => {


      const renderRows = ()=>{

        return vetor.map((produto,indice) => {
            return (
                <tr key={indice}>
                    <td>{indice+1}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.marca}</td>
                    <td></td>
                    <td></td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={()=>{selecionar(indice)}}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => {return null}}>
                            <i className="fa fa-trash"></i>
                        </button>
                                               
                    </td>
                </tr>
            )
        })
      }


    const renderTable = () =>{
        return(

        <div className="tb">
        <table className="table mt-4">
            <thead className="bg-light">
                <tr >
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Quantidade</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {
                
                renderRows()/* {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.marca}</td>
                            <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                } */}
            </tbody>
        </table>
        </div>
        )
        
    }


    return (
        
        renderTable()
    )
}

export default Tabela;