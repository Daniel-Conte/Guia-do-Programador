export enum UserTypes {
    CHANGE_USER_NAME = 'CHANGE_USER_NAME',
    CHANGE_USER_EMAIL = 'CHANGE_USER_EMAIL',

    POST_USER_SUCCESS = 'PUT_USER_SUCCESS',
    POST_USER_FAILED = 'PUT_USER_FAILED',
    
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_FAILED = 'GET_USER_FAILED',
    
    PUT_USER_SUCCESS = 'PUT_USER_SUCCESS',
    PUT_USER_FAILED = 'PUT_USER_FAILED',

    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED = 'DELETE_USER_FAILED',
}

export enum UserRequestTypes {
    POST_USER_REQUEST = 'POST_USER_REQUEST',
    GET_USER_REQUEST = 'GET_USER_REQUEST',
    PUT_USER_REQUEST = 'PUT_USER_REQUEST',
    DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
}

export const UserAsyncTypes = {
    ...UserRequestTypes,
    ...UserTypes
}

export interface User {
    readonly id?: number
    readonly name: string
    readonly email: string
}

export interface UserState {
    readonly user: User
    readonly list: User[]
}

interface ChangeUserName {
    readonly type: typeof UserTypes.CHANGE_USER_NAME
    readonly payload: { name: string }
}

interface ChangeUserEmail {
    readonly type: typeof UserTypes.CHANGE_USER_EMAIL
    readonly payload: { email: string }
}

export interface CreateUser {
    readonly type: typeof UserRequestTypes.POST_USER_REQUEST
}

export interface ReadUser {
    readonly type: typeof UserRequestTypes.GET_USER_REQUEST
    readonly payload: { id: string }
}

export interface UpdateUser {
    readonly type: typeof UserRequestTypes.PUT_USER_REQUEST
}

export interface DeleteUser {
    readonly type: typeof UserRequestTypes.DELETE_USER_REQUEST
}

export interface GetSuccess {
    readonly type: typeof UserTypes.GET_USER_SUCCESS
    readonly payload: { data: User[] }
}

export interface PostSuccess {
    readonly type: typeof UserTypes.POST_USER_SUCCESS
}

export interface PutSuccess {
    readonly type: typeof UserTypes.PUT_USER_SUCCESS
}

export interface DeleteSuccess {
    readonly type: typeof UserTypes.DELETE_USER_SUCCESS
}

export type UserRequestActionTypes = CreateUser | ReadUser | UpdateUser | DeleteUser
export type UserActionTypes = GetSuccess | PostSuccess | PutSuccess | DeleteSuccess | ChangeUserName | ChangeUserEmail