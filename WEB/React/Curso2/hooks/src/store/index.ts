import { IReducerState } from './types'

import { numberAdd2, numberAddN, numberDiv25, numberMulti7, numberRound, login } from './actions'
import mainReducer from './reducers'

// Arquivo principal que fornece todas as actions, estado inicial e o reduce principal

const initialState: IReducerState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    initialState,
    
    mainReducer,

    numberAdd2,
    numberAddN,
    numberDiv25,
    numberMulti7,
    numberRound,
    login
}