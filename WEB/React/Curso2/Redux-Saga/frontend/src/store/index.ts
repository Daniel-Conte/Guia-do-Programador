import { all } from '@redux-saga/core/effects'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './user/reducers'

import { userWatchers } from './user/sagas'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
    yield all([
        userWatchers
    ])
}

const rootReducer = combineReducers({
    user: userReducer
})

export default createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>