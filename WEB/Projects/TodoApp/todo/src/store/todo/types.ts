import { ThunkAction } from "redux-thunk"

export const DESCRIPTION_CHANGED = 'DESCRIPTION_CHANGED'
export const TODO_SEARCHED = 'TODO_SEARCHED'

export interface TodoItem {
    id: number
    description: string
    done: boolean
}

export interface TodoState {
    description: string
    list: TodoItem[]
}

interface ChangeDescription {
    type: typeof DESCRIPTION_CHANGED
    payload: string
}

interface Search {
    type: typeof TODO_SEARCHED
    payload: {
        description: string
        list: TodoItem[]
    }
}

interface Add {
    type: void
}

interface ToggleMark {
    type: void
}

interface Del {
    type: void
}

export type TodoActionTypes = ChangeDescription | Search | Add | ToggleMark | Del
export type ThunkResult<R> = ThunkAction<R, TodoState, undefined, TodoActionTypes>