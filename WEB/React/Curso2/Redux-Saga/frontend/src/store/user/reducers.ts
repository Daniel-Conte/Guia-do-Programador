import {
    UserActionTypes,
    UserTypes,
    UserState,
    User,
    UserSyncTypes
} from './types'

const INITIAL_STATE: UserState = {
    user: {id: '', name: '', email: '' },
    loading: false,
    list: Array<User>()
}

export function userReducer(
    state = INITIAL_STATE,
    action: UserActionTypes
): UserState {
    switch(action.type) {
        case UserTypes.REQUEST:
            return {
                ...state,
                loading: action.payload.loading
            }
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
        case UserTypes.CLEAR_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case UserSyncTypes.LOAD_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case UserTypes.GET_SUCCESS:
            return {
                ...INITIAL_STATE,
                list: action.payload.data
            }
        default:
            return state
    }
}