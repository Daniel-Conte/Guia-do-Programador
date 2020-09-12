import React, { Component } from 'react'

/*  Componentes de classe tem algumas vantagens sobre os de função:
        -> state: É um objeto que armazena as propriedades/valores do componente
            - Ao contrário do "props", no "state" é possível modificar os valores das propriedades
            - Basicamente, "state" é um "props" que dá pra modificar os valores
            - Sempre que sofrer uma mudança, o método "render()" é chamado

        -> Ciclo de vida: É possível monitorar e manipular os componentes durante suas 3 fases de vida:
            https://www.w3schools.com/REACT/react_lifecycle.asp

            --> Mounting: Adiciona o componente na DOM
                    São executados 4 métodos nessa ordem:
                    ( "render()" é obrigatório, os outros são opcionais )

                    >> constructor(props) -> É chamado antes de tudo
                        - Inicializa o state e outros valores
                        - Antes de tudo chame "super(props)" para incializar os métodos do "Component"

                    >> getDerivedStateFromProps(props, state) -> É chamado logo antes do componente ser renderizado
                        - É o lugar ideal para setar o state baseado no props

                    >> render() -> Renderiza o componente

                    >> componentDidMount() -> É chamado depois do componente ser renderizado
                        - É o lugar para manipular algo quando é necessário que o componente já esteja na DOM

            --> Updating: Atualiza o componente
                    São executados 5 métodos nessa ordem:
                    ( "render()" é obrigatório, os outros são opcionais )

                    >> getDerivedStateFromProps(props, state) -> É o primeiro método a ser chamado quando um componente é atualizado
*/

export default class Saudacao extends Component {
    // Uma classe SEMPRE deve extender(definir como pai/prototipo; herda as funções) "Component"

    state = { 
        /* 
        -> Essa forma é só pra inicializar o objeto(valores iniciais), pra modificar é usado "setState()"
        -> state SEMPRE deve ser inicializado

        -> >>> Inicie no "constructor" <<< 
        */
        tipo: this.props.tipo, // Para acessar o "props" deve usar: this.props
        nome: this.props.nome
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
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                    {/* "onChange" vai executar toda vez que ocorrer uma mudança */}
                    {/* "onChange" deve receber uma função para registrar o evento antes de executar outra função */}
                    {/* "value" vai ser o valor padrão que vai aparecer no input */}
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}