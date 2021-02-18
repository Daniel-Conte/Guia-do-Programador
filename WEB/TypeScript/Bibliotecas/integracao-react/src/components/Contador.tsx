import React from 'react'
import ContadorValor from './ContadorValor'
import logRender from '../decorators/logRender'

interface IContadorProps {
    valorInicial?: number
}

interface IContadorState {
    valor: number
}

// Decorator que imprime uma mensagem antes e depois de renderizar o componente
@logRender
export default class Contador
    extends React.Component<IContadorProps> {
    // Para setar o tipo do props de um componentes de classe, é usado generics

    state: IContadorState = {
        valor: this.props.valorInicial || 0
    }

    private setValor = (delta: number): void => {
        this.setState({
            valor: this.state.valor += delta
        })
    }

    render() {
        return (
            <div>
                {console.log('Renderizando o componente...')}
                <ContadorValor contador={this.state.valor} />
                    {/* Como "valorInicial" é opcional, é preciso passar um valor padrão para não ter a chance de ser passado um valor undefined */}

                <button onClick={() => this.setValor(10)}>+</button>
                <button onClick={() => this.setValor(-10)}>-</button>
            </div>
        )
    }
}