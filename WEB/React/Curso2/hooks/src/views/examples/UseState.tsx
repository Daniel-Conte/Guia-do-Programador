import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (_: any) => {
    // "useState" é a função que lida com o estado
    const [count, setCount] = useState<number>(0)
        // "useState(<estadoInicial>)" sempre retorna um array com 2 elementos
            // O primeiro é o valor do estado
            // O segundo é uma função que modifica o estado(primeiro elemento)
        // Usando "destructuring" facilita o uso
        // Cada chamada do "useState" serve para 1 estado, entao se quiser outros estados, repita o processo
    const [name, setName] = useState<string>("")
        // Criando outro estado

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => setCount(count - 1)}
                            // Chamando a função para alterar o estado de "count"
                    >-1</button>
                
                    <button
                        className="btn"
                        onClick={() => setCount(count + 1)}
                    >+1</button>

                    <button
                        className="btn"
                        onClick={() => setCount(current => current + 1000)}
                            // Ao passar uma função, o valor atual do estado é passado como parâmetro
                    >1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <input
                type="text"
                className="input"
                value={name}
                onChange={e => setName(e.target.value)}
                    // "Two way data bind", o input altera o estado e o valor é atualizado conforme o estado
            />
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
