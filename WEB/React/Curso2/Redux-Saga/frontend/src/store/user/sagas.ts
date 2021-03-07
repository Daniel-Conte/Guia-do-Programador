import { call, put, fork, takeLatest, StrictEffect } from 'redux-saga/effects'
import {
    UserAsyncTypes,
    User,
    CreateUser,
    DeleteUser,
    ReadUser,
    UpdateUser
} from './types'
import { getSuccess, loadUser, setLoading } from './actions'
import Api from '../../services/api'
import { AxiosResponse } from 'axios'

// As Sagas são divididas em "workers" e "watchers"
    // Cada "worker" tem sua "watcher"
    // As "workers" são as funções que irão fazer o "trabalho pesado", ou seja, fazer as chamadas assíncronas e chamar o reducer
    // As "watchers" são as funções que ficam escutando uma ActionCreator invocar o seu "type", e quando invocado chama uma "worker"

// Todas as sagas devem ser uma função Generator ("function*")
    // Lembrando que as funções Generator são muito úteis para fazer testes
    // Cada linha que contém "yield" será uma iteração(o teste irá parar em cada linha para checar os valores)

// Workers
function* getAllUsers(): Generator<StrictEffect, void, AxiosResponse<User[]>> {
    // As funções Generator retornam um Generator<T, TReturn, TNext>
        // T -> O tipo dos "Effect"s que os "yield"s contém
            // "Effect"s são as funções do Redux-Saga
            // "StrictEffect" é um tipo que restringe as linhas com "yield" para terem somente "Effects"
        // TReturn -> O que a função irá retornar
        // TNext -> O tipo dos dados que cada "yield" contém

    // Use o "try-catch" para tratar erros
    try {
        // "yield"s são usados nas linhas com "Effect"s
        const data = yield call(Api.get, '')
            // "call(<função>, <...Parâmetros>)" é uma função "blocking" que invoca a função com os parâmetros passados
                // Bom para fazer as chamadas assícronas
        yield put(getSuccess(data.data))
            // "put(<Action>)" é uma função "non-blocking" que chama o reducer
    } catch (error) {
        yield put({ type: 'REQUEST_FAILED' })
    }
}

// As workers recebem a Action retornada pelo ActionCreator que chamou a watcher desta worker
function* getUser(action: ReadUser): Generator<StrictEffect, void, AxiosResponse<User>> {
    const url = `/${action.payload.id}`

    try {
        const data = yield call(Api.get, url)
        yield put(loadUser(data.data))
    } catch (error) {
        yield put({ type: 'REQUEST_FAILED' })
    }
}

function* postUser(action: CreateUser): Generator<StrictEffect, void, AxiosResponse<User>> {
    try {
        yield put(setLoading(true))
        yield call(Api.post, '', action.payload.user)
        getAllUsers()
    } catch (error) {
        yield put({ type: 'REQUEST_FAILED' })
    }
}

function* putUser(action: UpdateUser): Generator<StrictEffect, void, AxiosResponse<User>> {
    try {
        yield put(setLoading(true))
        yield call(Api.put, action.payload.url, action.payload.user)
        getAllUsers()
    } catch (error) {
        yield put({ type: 'REQUEST_FAILED' })
    }
}

function* deleteUser(action: DeleteUser): Generator<StrictEffect, void, AxiosResponse<User>> {
    try {
        yield put(setLoading(true))
        yield call(Api.delete, action.payload.url)
        getAllUsers()
    } catch (error) {
        yield put({ type: 'REQUEST_FAILED' })
    }
}

// Watchers
// Cada watcher fica escutando um "type" para invocar uma worker
export function* watchGetAllUsers() {
    yield takeLatest(UserAsyncTypes.GET_ALL_USERS_REQUEST, getAllUsers)
        // "takeLatest(<type>, <worker>)" Fica escutando o "type" e SÓ executa a ÚLTIMA chamada do "type"
            /* Ex:
                - Ao apertar um botão ele chama esta watcher
                - Se você apertar o botão UMA vez, a função será executada normalmente
                - Se você apertar o botão novamente e a worker ainda não terminou de resolver a chamada anterior, a watcher cancela a chamada anterior e executa tudo novamente
                    - Ou seja, se você clicar no botão várias vezes e rápido, a watcher só irá validar o último clique
            */
            // Ao contrário da "takeLatest", existe a "takeEvery" que executa todas as chamadas que recebeu ao mesmo tempo
}

export function* watchGetUser() {
    yield takeLatest(UserAsyncTypes.GET_USER_REQUEST, getUser)
}

export function* watchPostUser() {
    yield takeLatest(UserAsyncTypes.POST_USER_REQUEST, postUser)
}

export function* watchPutUser() {
    yield takeLatest(UserAsyncTypes.PUT_USER_REQUEST, putUser)
}

export function* watchDeleteUser() {
    yield takeLatest(UserAsyncTypes.DELETE_USER_REQUEST, deleteUser)
}

// Criando um Array que armazena todas as watchers, facilitando a integração com a rootSaga
export const userWatchers = [
    fork(watchGetAllUsers),
        // "fork(<função>)" é uma função "non-blocking" que executa uma função qualquer
            // Por ser "non-blocking", ele irá executar a função e continuar o fluxo, mesmo se a função não tenha terminado de ser executada
    fork(watchGetUser),
    fork(watchPostUser),
    fork(watchPutUser),
    fork(watchDeleteUser)
]