import produtos from '../../data/produtos'
import './TabelaProdutos.css'

const TabelaProdutos = (_: any) => {
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(prod => {
                        return (
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.nome}</td>
                                <td>{prod.preco.toLocaleString('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }
                                )}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaProdutos