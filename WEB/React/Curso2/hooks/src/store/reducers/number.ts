import { IReducerAction, IReducerState } from '../types'

// Reducer específico contendo as alterações para o estado "number"
// Reducers específicos são reducers normais(não muda em sintaxe), só são juntados em um reducer principal no arquivo index
function numberReducer(state: IReducerState, action: IReducerAction): IReducerState {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberMulti7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        case 'numberRound':
            return { ...state, number: Math.round(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + (action.payload?.num || 0) }
        default:
            return state
    }
}

export default numberReducer