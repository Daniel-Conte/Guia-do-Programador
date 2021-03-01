export const DESCRIPTION_CHANGED = 'DESCRIPTION_CHANGED'

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

export type TodoActionTypes = ChangeDescription