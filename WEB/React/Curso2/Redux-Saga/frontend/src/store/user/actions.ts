import {
    UserRequestActionTypes,
    UserRequestTypes,
    UserActionTypes,
    UserTypes,
    User,
} from './types'

export const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => ({
    type: UserTypes.CHANGE_USER_NAME,
    payload: { name: e.target.value }
})

export const changeUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => ({
    type: UserTypes.CHANGE_USER_EMAIL,
    payload: { email: e.target.value }
})

// Actions para chamar as sagas

export const createUser = (): UserRequestActionTypes => ({
    type: UserRequestTypes.POST_USER_REQUEST
})

export const readUser = (id = ''): UserRequestActionTypes => ({
    type: UserRequestTypes.GET_USER_REQUEST,
    payload: { id }
})

export const updateUser = (): UserRequestActionTypes => ({
        type: UserRequestTypes.PUT_USER_REQUEST
})

export const deleteUser = (): UserRequestActionTypes => ({
    type: UserRequestTypes.DELETE_USER_REQUEST
})

// Actions para as Sagas chamarem os reducers

export const getSuccess = (users: User[]): UserActionTypes => ({
    type: UserTypes.GET_USER_SUCCESS,
    payload: { data: users }
})

export const postSuccess = (): UserActionTypes => ({
    type: UserTypes.POST_USER_SUCCESS
})

export const putSuccess = (): UserActionTypes => ({
    type: UserTypes.PUT_USER_SUCCESS
})

export const deleteSuccess = (): UserActionTypes => ({
    type: UserTypes.DELETE_USER_SUCCESS
})