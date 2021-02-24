import { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (_: any) => {

    // "useContext()" é usado para estabelecer comunicação direta entre componentes que estão "longes"
    // O contexto foi criado na pasta "data" e foi usado no componente "App" para prover os dados para toda a aplicação
    const context = useContext(DataContext)
        // "useContext(<Contexto>)" retorna o valor atual do contexto passado
    const { number, setNumber, text } = useContext(AppContext)

    function addNumber(delta: number) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{context.state.text}</span>
                <span className="text">{context.state.number}</span>

                <div>
                    <button
                        className="btn"
                        onClick={() => addNumber(-1)}
                    >-1</button>
                    <button
                        className="btn"
                        onClick={() => addNumber(1)}
                    >+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => setNumber(number - 1)}
                    >-1</button>
                    <button
                        className="btn"
                        onClick={() => setNumber(number + 1)}
                    >+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
