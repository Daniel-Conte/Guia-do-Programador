import React from 'react' // CORE do React
    // Aqui está as conversões do JSX
import ReactDOM from 'react-dom' // Dependência do react que vai se comunicar com a DOM

import Primeiro from './components/Primeiro'
    // O nome da variável pode ser qualquer um, CONTANTO que a primeira letra seja MAIÚSCULA, senão é confundido com um elemento normal
        // Isso para componentes PERSONALIZADOS
import BomDia from './components/BomDia'
import Multi, { BoaTarde, BoaNoite } from './components/Multiplos'
    // "Multi" vai importar um objeto contendo as 2 funções no "export default"
    // "{ ... }" vai importar cada função separada (export)
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

const element = <h1>React</h1> // !!! ISSO NÃO É HTML !!!
    // Isso é JAVASCRIPT que faz parte do JSX(JavaScript extendido)
    // Esse elemento JSX será convertido para JavaScript puro

ReactDOM.render(element, document.getElementById('root'))
    // ".render(<elementoJSX>, <ondeJogarOElementoNoHTML>)" Renderiza um elemento na página
    // o "elemento" pode ser um texto normal sem tags
    // $('<h1>').html('React') Esse mesmo comando só que usando jQuery

ReactDOM.render(<Primeiro/>, document.getElementById('root'))
    // Se o componente/elemento for importado de outro arquivo, deve-se colocar o nome do arquivo importado dentro de uma tag sem corpo "< ... />"

    /* 
    >>>>>>> Toda vez que você está chamando um componente, ele é INSTANCIADO <<<<<<<
    */

ReactDOM.render(<BomDia nome="Arthur" idade={39}/>, document.getElementById('root'))
    // É possível passar atributos no componente, assim esses atributos podem ser passados como parametro na função desse componente
    // É possível criar atributos com valores envolvidos por "{ }"(chaves), assim pode-se passar valores do tipo number, boolean, variáveis... sem ser uma string

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana"/>
        <BoaNoite nome ="Bruna"/>
    </div>
, document.getElementById('root'))

ReactDOM.render(<Saudacao tipo="Bom dia" nome="João" />, document.getElementById('root'))

ReactDOM.render(
    <Pai nome="Paulo" sobrenome="Silva">
        {/* Método para passar as propriedades(sobrenome) do pai para os filhos sem ter que digitar tudo a mão */}
        <Filho nome="Pedro" />
        <Filho nome="Carla" />
        <Filho nome="Ana" />
        {/*
        - Colocando um componente dentro de outro não funciona por padrão
            - Precisa colocar um código dentro do componente pai para funcionar
        */}
    </Pai>
, document.getElementById("root"))