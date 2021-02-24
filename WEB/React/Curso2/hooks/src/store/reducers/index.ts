import { IReducerAction, IReducerState } from '../types'

import userReducer from './user'
import numberReducer from './number'

// Este arquivo deve receber todos os reducers específicos para serem agrupados em um reducer principal

function mainReducer(state: IReducerState, action: IReducerAction): IReducerState {
    // Já que os reducers foram divididos em arquivos diferentes, é necessário seguir alguns passos:
        // Crie uma variável que irá guardar o estado atualizado
        // Esta variável deve receber o estado retornado do primeiro reducer
        // Passe essa variável como estado para o segundo reducer
        // A variável deve também receber o estado retornado desse segundo reducer
        // Assim vai encadeando todos os reducers até chegar no último
        // O retorno do último reducer deve ser o retorno do reducer principal
    
    let newState: IReducerState
    newState = userReducer(state, action)
    //newState = cartReducer(newState, action)
    //newState = productReducer(newState, action)
        // Exemplo de encadeamento com mais reducers
    return numberReducer(newState, action)
}

export default mainReducer