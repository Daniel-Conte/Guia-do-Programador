interface IReducerState {
    cart: object[]
    products: object[]
    user: null | {
        name?: string
    }
    number: number
}

interface IReducerAction {
    type: string
    payload?: {
        name?: string
        num?: number
    }
}

type Dispatch = (value: IReducerAction) => void

export type {
    IReducerAction,
    IReducerState,
    Dispatch
}