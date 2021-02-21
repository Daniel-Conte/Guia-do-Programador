import React from "react";
import Display from './Display'
import './Contador.css'
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

interface IContador {
    numeroInicial?: number
    passoInicial?: number
}

interface IState {
    numero: number
    passo: number
}

class Contador extends React.Component<IContador> {
    state: IState = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    // Usando arrow functions para amarrar o "this" e poder passar as funções como parâmetro para os componentes de forma direta
    inc = () => {
        let newState = {...this.state}
        newState.numero += newState.passo

        this.setState(newState)
    }

    dec = () => {
        let newState = {...this.state}
        newState.numero -= newState.passo

        this.setState(newState)
    }

    setPasso = (newPasso: number) => {
        let newState = {...this.state}
        newState.passo = newPasso

        this.setState(newState)
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />

                <Botoes
                    incrementar={this.inc}
                    decrementar={this.dec}
                />
            </div>
        )
    }
}

export default Contador