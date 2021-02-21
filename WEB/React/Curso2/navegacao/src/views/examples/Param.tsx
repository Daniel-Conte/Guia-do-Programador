import { useParams } from "react-router-dom"

const Param = (_: any) => {
    const { id }: {id: string | undefined} = useParams()
        // "useParams" retorna o valor do parâmetro na url
        // É necessário usar o nome exato do parâmetro no destructuring
    return (
        <div className="Param">
            <h1>Param</h1>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Param