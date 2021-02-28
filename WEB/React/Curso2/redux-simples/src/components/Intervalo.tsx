import './Intervalo.css'

import Card from './Card'

import { connect, ConnectedProps } from 'react-redux'

type Numeros = {
    numeros: {
        min: number;
        max: number;
    }
}

interface RootState extends Numeros {}

const mapState = (state: RootState) => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

const connector = connect(mapState)

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
                        readOnly
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input
                        type="number"
                        value={props.max}
                        readOnly
                    />
                </span>
            </div>
        </Card>
    )
}

export default connector(Intervalo)
export type {
    Numeros
}