import './Intervalo.css'

import Card from './Card'

import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '../store/storeConfig'

import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/number/actions'
    // Importando os Actions Creators

const mapState = (state: RootState) => {
    return {
        min: state.number.min,
        max: state.number.max
    }
}

// Mapeando as Actions da Store que serão usadas no componente
    // As actions mapeadas serão enviadas para o "props" do componente
const mapDispatch = {
    // Basta passar um objeto contendo chave/valor, sendo o valor a Action importada
        // A chave pode ser um nome qualquer
        // O Redux invoca o "dispatch" com a Action retornada das Action Creators internamnete (quando passa o objeto pro "connect()")
    alterarMinimo: alterarNumeroMinimo,
    alterarMaximo: alterarNumeroMaximo,
}

// Outra maneira de mapear as Actions
/* const mapDispatch = (dispatch: Dispatch<NumberActionTypes>) => {
    // "NumberActionTypes" é um tipo criado na pasta "store/number"
    return {
        alterarMinimo(novoNumero: number) {
            const action = alterarNumeroMinimo(novoNumero)

            dispatch(action)
        }
    }
} */

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Intervalo: React.FC<Props> = props => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input
                        type="number"
                        value={props.min}
                        onChange={e => props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type="number"
                        value={props.max}
                        onChange={e => props.alterarMaximo(+e.target.value)}
                    />
                </span>
            </div>
        </Card>
    )
}

export default connector(Intervalo)