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

function* getAllUsers(): Generator<StrictEffect, void, AxiosResponse<User[]>> {
    try {
        const data = yield call(Api.get, '')
        yield put(getSuccess(data.data))
    } catch (error) {
        yield put({ type: 'REQUEST_FAILED' })
    }
}

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

export function* watchGetAllUsers() {
    yield takeLatest(UserAsyncTypes.GET_ALL_USERS_REQUEST, getAllUsers)
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

export const userWatchers = [
    fork(watchGetAllUsers),
    fork(watchGetUser),
    fork(watchPostUser),
    fork(watchPutUser),
    fork(watchDeleteUser)
]