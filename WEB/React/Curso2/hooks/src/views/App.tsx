import './App.css'
import { BrowserRouter as Router } from  'react-router-dom'
import { useState } from 'react'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, { data } from '../data/DataContext'
import Store from '../data/Store'

const App = (_: any) => {
    const [state, setState] = useState(data)

    return (
        // "Store" é um componente que vai apenas lidar com o Context, sem nada visual
        // Esta forma é mais certa do que aquela abaixo(DataContext)
        <Store>

            {/*
            -> O contexto importado deve ser usado como um componente(<Contexto.Provider>) e envolver toda a aplicação, assim todos os componentes tem acesso ao contexto e ao valor provido
            -> A propriedade "value" deve receber os dados que serão providos no contexto
            -> NÃO É RECOMENDADO PASSAR O ESTADO DIRETO
                -> Sempre passe funções que retornem e alterem o estado indiretamente
            */}
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App