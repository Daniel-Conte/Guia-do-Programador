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

const Soma: React.FC<Props> = props => {
    const { min, max } = props
    const soma = max + min

    return (
        <Card title="Soma dos Números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{soma}</strong>
                </span>
            </div>
        </Card>
    )
}

export default connector(Soma)