import PageTitle from '../../components/layout/PageTitle'

import SectionTitle from '../../components/layout/SectionTitle'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const UseCustom = (_: any) => {
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'

    // Utilizando hooks criados
    const [count, inc, dec] = useCounter(10, 2)
    const response = useFetch(url)

    type State = {nome: string, sigla: string}

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() => inc(5)}
                    >+1</button>
                    <button
                        className="btn"
                        onClick={() => dec()}
                    >-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {!response.loading && response.data?.map((state: State) => {
                        return (
                            <li key={state.nome}>
                                {state.nome} - {state.sigla}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UseCustom
