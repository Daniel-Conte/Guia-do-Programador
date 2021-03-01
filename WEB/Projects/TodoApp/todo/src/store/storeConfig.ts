import { combineReducers, createStore } from 'redux'

import { todoReducer } from './todo/reducers'

const rootReducer = combineReducers({
    todo: todoReducer
})

const store = createStore(rootReducer)

export default store
export type RootState = ReturnType<typeof rootReducer>