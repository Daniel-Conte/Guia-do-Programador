import React from 'react' // CORE do React
    // Aqui está as conversões do JSX
import ReactDOM from 'react-dom' // Dependência do react que vai se comunicar com a DOM

import Primeiro from './components/Primeiro'

const element = <h1>React</h1> // !!! ISSO NÃO É HTML !!!
    // Isso é JAVASCRIPT que faz parte do JSX(JavaScript extendido)
    // Esse elemento JSX será convertido para JavaScript puro

ReactDOM.render(element, document.getElementById('root'))
    // ".render(<elementoJSX>, <ondeJogarOElementoNoHTML>)" Renderiza um elemento na página
    // o "elemento" pode ser um texto normal sem tags
    // $('<h1>').html('React') Esse mesmo comando só que usando jQuery

ReactDOM.render(<Primeiro/>, document.getElementById('root'))
    // Se o componente/elemento for importado de outro arquivo, deve-se colocar o nome do arquivo importado dentro de uma tag sem corpo "< ... />"