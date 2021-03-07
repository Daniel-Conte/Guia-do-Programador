import {
    UserActionTypes,
    UserAsyncActionTypes,
    UserSyncTypes,
    UserAsyncTypes,
    User,
} from './types'

export const changeUserName = (e: React.ChangeEvent<HTMLInputElement>): UserActionTypes => ({
    type: UserSyncTypes.CHANGE_USER_NAME,
    payload: { name: e.target.value }
})

export const changeUserEmail = (e: React.ChangeEvent<HTMLInputElement>): UserActionTypes => ({
    type: UserSyncTypes.CHANGE_USER_EMAIL,
    payload: { email: e.target.value }
})

export const clearUser = (): UserActionTypes => ({
    type: UserSyncTypes.CLEAR_USER,
    payload: { user: { id: '', name: '', email: '' } }
})

export const setLoading = (loading: boolean): UserActionTypes => ({
    type: UserSyncTypes.REQUEST,
    payload: { loading }
})

export const loadUser = (user: User): UserActionTypes => ({
    type: UserSyncTypes.LOAD_USER,
    payload: { user }
})

// Actions para chamar as sagas

export const createUser = (user: User): UserAsyncActionTypes => {

    return {
        type: UserAsyncTypes.POST_USER_REQUEST,
        payload: { user }
    }
}

export const readUser = (id: string): UserAsyncActionTypes => {
    
    return {
        type: UserAsyncTypes.GET_USER_REQUEST,
        payload: { id }
    }
}

export const readAllUsers = (): UserAsyncActionTypes => {

    return {
        type: UserAsyncTypes.GET_ALL_USERS_REQUEST
    }
}

export const updateUser = (user: User): UserAsyncActionTypes => {
    const url = `/${user.id}`

    return {
        type: UserAsyncTypes.PUT_USER_REQUEST,
        payload: { user, url }
    }
}

export const deleteUser = (id: string): UserAsyncActionTypes => {
    const url = `/${id}`

    return {
        type: UserAsyncTypes.DELETE_USER_REQUEST,
        payload: { url }
    }
}

// Actions para as Sagas chamarem os reducers

export const getSuccess = (users: User[]): UserActionTypes => ({
    type: UserAsyncTypes.GET_SUCCESS,
    payload: { data: users }
})