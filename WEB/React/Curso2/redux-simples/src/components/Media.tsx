import Card from './Card'

import { RootState } from '../store/storeConfig'

import { connect, ConnectedProps } from 'react-redux'

// Para acessar o estado e as actions da aplicação (que são providos pelo componente "Provider") deve-se fazer 2 coisas:
    // Criar uma função que recebe de parâmetro o estado da aplicação e que deve retornar um objeto com os atributos do estado da aplicação que o componente vai utilizar
        // Deve-se criar uma função para mapear o estado e outra pra mapear as actions
    // Usar a função "connect()" para receber os atributos que foram escolhidos na função

// Criando a função para mapear o estado
const mapState = (state: RootState) => {
    // O parâmetro "state" contém o estado total da aplicação

    // Escolhendo os atributos que este componente irá usar
    return {
        min: state.number.min,
        max: state.number.max
    }
}

const connector = connect(mapState)
    // "connect(<mapState>, <mapActions>)"
        // Deve-se passar as funções mapeadoras(sem invocar) como parâmetro para "connect()"
        // Então o "connect()" irá retornar uma função onde deve ser passado o componente atual como parâmetro
            // Essa função será invocada na exportação do componente

// Criando um tipo para o componente receber o estado via "props" mas sem que as instâncias do componente exijem que este tipo seja passado nas propriedades
type PropsFromRedux = ConnectedProps<typeof connector>

// O tipo principal para o "props" do componente deve herdar o tipo dos atributos vindos do estado da aplicação via "connect"
type Props = PropsFromRedux & {
    // ... Propriedades para receber das instâncias
}

const Media: React.FC<Props> = props => {
    const { min, max } = props
        // Utilizando os valores vindo do estado da aplicação

    const media = (max + min) / 2

    return (
        <Card title="Média dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{media}</strong>
                </span>
            </div>
        </Card>
    )
}

// A função "connector"(que é o retorno de "connect") deve ser invocada na exportação do componente
export default connector(Media)
    // A função deve receber o componente como parâmetro
    // Assim os atributos mapeados do estado e as actions serão enviados para o "props" do componente