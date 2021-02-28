export const NUM_MIN_ALTERADO = 'NUM_MIN_ALTERADO'
export const NUM_MAX_ALTERADO = 'NUM_MAX_ALTERADO'

export interface NumberState {
    min: number
    max: number
}

interface SetMinAction {
    type: typeof NUM_MIN_ALTERADO,
    payload: number
}

interface SetMaxAction {
    type: typeof NUM_MAX_ALTERADO,
    payload: number
}

export type NumberActionTypes = SetMinAction | SetMaxAction