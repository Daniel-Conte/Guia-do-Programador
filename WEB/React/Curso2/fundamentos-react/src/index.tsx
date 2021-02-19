import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Primeiro from './components/basic/Primeiro'

const tag = <div>Olá React!</div>

ReactDOM.render(
    <Primeiro />,
    document.getElementById('root')
)