import {
    UserActionTypes,
    UserState,
    User,
    UserTypes
} from './types'

const INITIAL_STATE: UserState = {
    user: { name: '', email: '' },
    list: Array<User>()
}

export function userReducer(
    state = INITIAL_STATE,
    action: UserActionTypes
): UserState {
    switch(action.type) {
        case UserTypes.CHANGE_USER_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.name
                }
            }
        case UserTypes.CHANGE_USER_EMAIL:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload.email
                }
            }
        case UserTypes.GET_USER_SUCCESS:
            return {
                ...state,
                list: action.payload.data
            }
        default:
            return state
    }
}