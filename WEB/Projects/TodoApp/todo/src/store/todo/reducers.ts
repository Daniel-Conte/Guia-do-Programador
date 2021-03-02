import {
    TodoState,
    TodoItem,
    DESCRIPTION_CHANGED,
    TODO_SEARCHED,
    TodoActionTypes
} from './types'

const initialState: TodoState = {
    description: '',
    list: Array<TodoItem>()
}

export function todoReducer(
    state = initialState,
    action: TodoActionTypes
): TodoState {
    switch(action.type) {
        case DESCRIPTION_CHANGED:
            return {
                ...state,
                description: action.payload
            }
        case TODO_SEARCHED:
            return {
                ...state,
                description: action.payload.description,
                list: action.payload.list
            }
        default:
            return state
    }
}