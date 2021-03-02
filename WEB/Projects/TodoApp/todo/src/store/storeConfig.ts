import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'

import { todoReducer } from './todo/reducers'

const rootReducer = combineReducers({
    todo: todoReducer
})

// Middlewares são funções que ficam entre as Actions e os Reducers e fazem um processamento de acordo com o middleware
const middlewareEnhancer = applyMiddleware<RootState>(thunk)
    // "applyMiddleware(<middlewares>)" armazena e aplica os middlewares
    // "thunk"(redux-thunk) é um middleware para criação de Action Creators, onde retorna uma função "dispatch"(retorna uma Action), que pode ser usada para tratar chamadas assíncronas e executar vários "dispatchs" em um único Action Creator

// Os middleware devem ser passados para o "createStore"
const store = createStore(rootReducer, middlewareEnhancer)

export default store
export type RootState = ReturnType<typeof rootReducer>