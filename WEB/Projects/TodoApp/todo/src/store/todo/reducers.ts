import {
    TodoState,
    TodoItem,
    DESCRIPTION_CHANGED,
    TodoActionTypes
} from './types'

const initialState: TodoState = {
    description: '',
    list: Array<TodoItem>()
}

export function todoReducer(
    state = initialState,
    action: TodoActionTypes
) {
    switch(action.type) {
        case DESCRIPTION_CHANGED:
            return {
                ...state,
                description: action.payload
            }
        default:
            return state
    }
}