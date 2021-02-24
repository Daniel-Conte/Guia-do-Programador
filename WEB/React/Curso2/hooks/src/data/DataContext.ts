import React from 'react'

interface Idata {
    number: number
    text: string
}

export const data: Idata = {
    number: 123,
    text: 'Context API'
}

type DataContext = {
    state: Idata
    setState: Function
}

const DataContext = React.createContext<DataContext>({
    state: { number: 0, text: ''},
    setState: () => void {}
})
    // "React.createContext(<valorPadrão>)" cria um novo contexto com um valor padrão

// O Contexto criado deve ser exportado de forma padrão
export default DataContext

// Geralmente é importado pelo componente "App", assim toda a aplicação tem acesso a este contexto