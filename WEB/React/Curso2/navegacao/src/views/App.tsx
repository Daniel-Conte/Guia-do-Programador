import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Content from '../components/layout/Content'
import Menu from '../components/layout/Menu'
import './App.css'

const App = (_: any) => (
    <div className="App">
        <BrowserRouter>
            {/* O Router deve envolver TODA a aplicação, assim monitorando toda a navegação */}
            <Menu />
            <Content />
        </BrowserRouter>
    </div>
)

export default App