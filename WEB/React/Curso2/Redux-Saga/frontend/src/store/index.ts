import { all } from '@redux-saga/core/effects'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './user/reducers'

import { userWatchers } from './user/sagas'

const sagaMiddleware = createSagaMiddleware()
    // 1 - Importe o default de "redux-saga" e o invoque

// Criando uma função GENERATOR para agrupar todas as sagas do projeto
    // Mesmo esquema do "rootReducer"
function* rootSaga() {
    yield all([
        // "all([<sagas>])" executa todas as sagas em paralelo
        ...userWatchers
    ])
}

const rootReducer = combineReducers({
    user: userReducer
})

export default createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
        // 2 - Adicione o sagaMiddleware invocado na store
)

sagaMiddleware.run(rootSaga)
    // 3 - Rode a sagaMiddleware passando a saga principal

export type RootState = ReturnType<typeof rootReducer>