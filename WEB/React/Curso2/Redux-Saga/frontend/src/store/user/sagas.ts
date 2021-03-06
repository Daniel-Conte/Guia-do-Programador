import { call, put, fork, takeLatest, StrictEffect } from 'redux-saga/effects'
import { UserAsyncTypes, User, ReadUser } from './types'
import { getSuccess } from './actions'
import Api from '../../services/api'

function* getUser(action: ReadUser): Generator<StrictEffect, void, User[]> {
    const url = action.payload.id ? `/${action.payload.id}` : ''

    try {
        yield put({ type: UserAsyncTypes.GET_USER_REQUEST })
        const data = yield call(Api.get, url)
        yield put(getSuccess(data))
    } catch (err) {
        yield put({ type: UserAsyncTypes.GET_USER_FAILED, payload: { error: err.message }})
    }
}

function* watchGetUser() {
    yield takeLatest(UserAsyncTypes.GET_USER_REQUEST, getUser)
}

export function* userWatchers() {
    yield fork(watchGetUser)
}