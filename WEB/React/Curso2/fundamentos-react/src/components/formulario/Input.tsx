import { useState } from "react"

// Componentes controlados e não controlados são os elementos de formulários
    // Controlados: São os elementos em que o componente consegue monitorar as mudanças feitas, seja pelo estado ou props
    // Não controlados: São os elementos em que o componente não monitora as mudanças feitas, os elementos tem estado próprio (são "independentes")

const Input = (_: any) => {
    const [valor, setValor] = useState('Inicial')
    
    function quandoMudar(e: React.ChangeEvent<HTMLInputElement>) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* No React, elementos de input são sem corpo */}
                <input value={valor} onChange={quandoMudar}/>
                    {/* Controlado, pois o valor e as mudanças do input estão sendo controladas pelo estado do componente */}
                <input value={valor} readOnly/>
                    {/* Ao conectar somente o valor do estado para o input sem a função "onChange", irá gerar um erro, pois não é possível alterar o valor. Então add a função ou mude para "readOnly" */}
                <input value={undefined}/>
                    {/* Não controlado, pois o estado do componente não está conectado com o input, então o input passa a possuir um estado próprio */}
            </div>
        </div>
    )
}

export default Input