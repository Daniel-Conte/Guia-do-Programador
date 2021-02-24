import { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

// Importação do reducer principal e das actions
// É o mesmo reducer que foi feito neste arquivo, só que organizado em pastas e arquivos diferentes
import { mainReducer, numberAdd2, numberAddN, numberDiv25, numberMulti7, numberRound, login } from '../../store'

interface IReducerState {
    cart: object[]
    products: object[]
    user: null | {
        name?: string
    }
    number: number
}

interface IReducerAction {
    type: string
    payload?: {
        name?: string
        num?: number
    }
}

const initialState: IReducerState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

// A função que vai ser passada para o "useReducer" deve conter 2 parâmetros: O "state" e a "action"
    // A função deve retornar o "State"
    // "state" é o objeto que contém o estado
    // "action" é um abjeto personalizado, mas que por convenção tem geralmente 2 atributos:
        // "type" recebe uma string que contém o nome da ação a ser executada
        // "payload" recebe um objeto com dados (útil para passar parâmetros para a ação escolhida)
// Geralmente "reducers" são grandes, então é recomendável que divida-os em pastas e arquivos diferentes, assim melhorando a escalabilidade e deixando o componente mais focado nas questões visuais
    // Na pasta "store" foi construído este reducer abaixo, só que dividido em pastas e arquivos para melhorar a escalabilidade
function reducer(state: IReducerState, action: IReducerAction): IReducerState {
    // Usando "switch" para executar uma alteração no estado conforme a ação escolhida
    switch(action.type) {
        case 'numberAdd2':
            // A alteração de estado para cada ação é feita de forma manual
            return { ...state, number: state.number + 2 }
                // Lembre-se sempre de clonar o estado(...state) para copiar os atributos que não foram alterados
        case 'login':
            return { ...state, user: { name: action.payload?.name } }
        case 'numberMulti7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'numberRound':
            return { ...state, number: Math.round(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + (action.payload?.num || 0) }
        default:
            return state
    }
}

const UseReducer = (_: any) => {
    // "useReducer()" é um substituto do "useState" para trabalhar com estados mais complexos(objetos com vários atributos)
    // Recebe 2 parâmetros: Uma função "reducer" para alterar o estado e o estado inicial
    // Retorna 2 elementos: Um objeto contendo o estado e outro objeto contendo as propriedades definidas na função "reducer"
    //const [state, dispatch] = useReducer(reducer, initialState)
    const [state, dispatch] = useReducer(reducer, initialState)
            // "useReducer(<função>, <estadoInicial>)"
            // A função passada para o "useReducer" vai ser executada internamente
            // "dispatch" deve ser usado como uma função e é responsável por alterar o estado
            // Recebe somente 1 parâmetro, que é o objeto "action" definido na função "reducer", devem ser do mesmo tipo
    const [state2, dispatch2] = useReducer(mainReducer, initialState)
        // Reducer importado

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {/* Estado do reducer deste arquivo */}
                {state.user ? 
                    (<span className="text">{state.user.name}</span>)
                    : (<span className="text">Sem usuário</span>)
                }
                <span className="text">{state.number}</span>

                {/* Estado do reducer importado */}
                {state2.user ? 
                    (<span className="text">{state2.user.name}</span>)
                    : (<span className="text">Sem usuário</span>)
                }
                <span className="text">{state2.number}</span>
                <div>

                    {/* !!!!! Chamando as actions do reducer criado neste arquivo !!!!! */}
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'login', payload: { name: 'Maria' } })}
                            // Utilizando o "dispatch" como função para alterar o estado
                            // A função deve receber um objeto do mesmo tipo do parâmetro "action" na função "reducer"
                    >Login</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}
                    >+2</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberMulti7' })}
                    >*7</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberDiv25' })}
                    >/25</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberRound' })}
                    >Arredondar</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: { num: 100 } })}
                    >+100</button>

                    <button
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: { num: -100 } })}
                    >-100</button>
                </div>

                <div>

                    {/* !!!!! Chamando as actions do reducer importado !!!!! */}
                    <button
                        className="btn"
                        onClick={() => login(dispatch2, 'Pedro')}
                            // Para chamar as actions criadas como funções, basta chamar a função passando o "dispatch"
                                // Aquelas que possuem mais parâmetros, passe os parâmetros necessários
                    >Login</button>

                    <button
                        className="btn"
                        onClick={() => numberAdd2(dispatch2)}
                    >+2</button>

                    <button
                        className="btn"
                        onClick={() => numberMulti7(dispatch2)}
                    >*7</button>

                    <button
                        className="btn"
                        onClick={() => numberDiv25(dispatch2)}
                    >/25</button>

                    <button
                        className="btn"
                        onClick={() => numberRound(dispatch2)}
                    >Arredondar</button>

                    <button
                        className="btn"
                        onClick={() => numberAddN(dispatch2, 100)}
                    >+100</button>

                    <button
                        className="btn"
                        onClick={() => numberAddN(dispatch2, -100)}
                    >-100</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
