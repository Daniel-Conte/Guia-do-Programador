import React, { useState } from 'react'

type AppContext = {
    number: number
    text: string
    setNumber: (a: number) => void
    setText: (a: string) => void
}

interface IStore {
    children: React.ReactNode
}

const initialState = {
    number: 1234,
    text: 'Context API + Hooks',
    setNumber: (a: number) => {},
    setText: (a: string) => {}
}

export const AppContext = React.createContext<AppContext>(initialState)

// Criando um componente apenas para lidar com o Context, sem nada visual
const Store = (props: IStore) => {
    const [state, setState] = useState(initialState)

    function updateState(key: string, value: number | string) {
        setState({
            ...state,
                // Vai clonar o estado atual
            [key]: value
                // Vai modificar apenas a chave passada
                // Já que "key" é uma string, é possível acessar a chave diretamente
        })
    }

    return (
        // Vai prover o Context para toda a aplicação
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: num => updateState('number', num),
            setText: text => updateState('text', text)
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store