import Card from './Card'

import { connect, ConnectedProps } from 'react-redux'

import { Numeros } from './Intervalo'

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

const Sorteio: React.FC<Props> = props => {
    const { min, max } = props
    const sorteio = Math.round(Math.random() * (max - min) + min)

    return (
        <Card title="Sorteio dos Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{sorteio}</strong>
                </span>
            </div>
        </Card>
    )
}

export default connector(Sorteio)