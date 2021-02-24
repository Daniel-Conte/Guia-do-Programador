import { IReducerAction, IReducerState } from '../types'

// Reducer específico contendo as alterações para o estado "user"
function userReducer(state: IReducerState, action: IReducerAction): IReducerState {
    switch(action.type) {
        case 'login':
            return { ...state, user: { name: action.payload?.name } }
        default:
            return state
    }
}

export default userReducer