import React, { Component } from 'react'

export default class Saudacao extends Component {
    // Uma classe SEMPRE deve extender(definir como pai/prototipo; herda as funções) "Component"

    constructor(props) {
        // "constructor()" é útil AQUI só pra inicializar o "state" e fazer "bind()" dos métodos
        super() // Sempre chame o "super()"

        this.setTipo = this.setTipo.bind(this)
            // A função agora está grudada e sempre estará apontando para o componente

        this.state = { 
            /* 
            -> Essa forma é só pra inicializar o objeto(valores iniciais), pra modificar é usado "setState()"
            -> state SEMPRE deve ser inicializado
    
            -> Inicie no "constructor()" somente se for inicializar mais mais coisas
                - Senão pode iniciar fora sem problemas
                - Aqui é só pra ilustrar dentro...
            */
            tipo: 'Boa Tarde',
            nome: 'Ana'
            // Evite usar "props.nome/tipo pra atribuir a state"
        }
    }


    setTipo(e) {
        this.setState({ tipo: e.target.value }) 
            // "setState(<objetoDoState>)" modifica os valores do "state"
            // O target está apontando para o input que disparou a função
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        // É onde fica tudo o que sera renderizado no componente
        // É chamado toda vez que uma atualização acontecer(quando o "state" é modificado)

        //const { tipo, nome } = this.props // Os valores do props são SOMENTE LEITURA
        const { tipo, nome } = this.state // Os valores do state são modificáveis
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                    {/*
                    - "onChange" vai executar toda vez que ocorrer uma mudança
                    - Aqui o "this" é undefined
                        - Para ele apontar para o componente precisa usar uma arrow function ou usar um "bind()" no "setTipo" dentro do construtor e apontar para o componente(this)
                    - "onChange" deve receber uma função para registrar o evento antes de executar outra função 
                    - "value" vai ser o valor padrão que vai aparecer no input
                    */}
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
                    {/* Aqui o "this" aponta para o componente(Saudacao) */}
            </div>
        )
    }
}