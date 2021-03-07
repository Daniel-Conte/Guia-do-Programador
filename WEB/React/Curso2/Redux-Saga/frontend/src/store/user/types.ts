export enum UserSyncTypes {
    CHANGE_USER_NAME = 'CHANGE_USER_NAME',
    CHANGE_USER_EMAIL = 'CHANGE_USER_EMAIL',
    CLEAR_USER = 'CLEAR_USER',
    REQUEST = 'REQUEST',
    LOAD_USER = 'LOAD_USER'
}

export enum UserAsyncTypes {
    GET_SUCCESS = 'GET_SUCCESS',

    POST_USER_REQUEST = 'POST_USER_REQUEST',
    GET_USER_REQUEST = 'GET_USER_REQUEST',
    GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST',
    PUT_USER_REQUEST = 'PUT_USER_REQUEST',
    DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
}

export const UserTypes = {
    ...UserAsyncTypes,
    ...UserSyncTypes
}

export interface User {
    readonly id: string
    readonly name: string
    readonly email: string
}

export interface UserState {
    readonly user: User
    readonly loading: boolean
    readonly list: User[]
}

interface ChangeUserName {
    readonly type: typeof UserSyncTypes.CHANGE_USER_NAME
    readonly payload: { name: string }
}

interface ChangeUserEmail {
    readonly type: typeof UserSyncTypes.CHANGE_USER_EMAIL
    readonly payload: { email: string }
}

interface ClearUser {
    readonly type: typeof UserSyncTypes.CLEAR_USER
    readonly payload: { user: User }
}

interface LoadUser {
    readonly type: typeof UserSyncTypes.LOAD_USER
    readonly payload: { user: User }
}

interface Request {
    readonly type: typeof UserSyncTypes.REQUEST
    readonly payload: { loading: boolean }
}

export interface CreateUser {
    readonly type: typeof UserAsyncTypes.POST_USER_REQUEST
    readonly payload: { user: User }
}
    
export interface ReadUser {
    readonly type: typeof UserAsyncTypes.GET_USER_REQUEST
    readonly payload: { id: string }
}

export interface ReadAllUsers {
    readonly type: typeof UserAsyncTypes.GET_ALL_USERS_REQUEST
}
    
export interface UpdateUser {
    readonly type: typeof UserAsyncTypes.PUT_USER_REQUEST
    readonly payload: { user: User, url: string }
}
    
export interface DeleteUser {
    readonly type: typeof UserAsyncTypes.DELETE_USER_REQUEST
    readonly payload: { url: string }
}

export interface GetSuccess {
    readonly type: typeof UserAsyncTypes.GET_SUCCESS
    readonly payload: { data: User[] }
}

export type UserActionTypes = GetSuccess | ChangeUserName | ChangeUserEmail | ClearUser | Request | LoadUser
export type UserAsyncActionTypes = CreateUser | ReadUser | ReadAllUsers | UpdateUser | DeleteUser