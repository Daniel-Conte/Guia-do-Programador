import {
    UserActionTypes,
    UserAsyncActionTypes,
    UserSyncTypes,
    UserAsyncTypes,
    User,
} from './types'

// Actions normais
    // Essas Actions não irão fazer uma chamada assícrona, então elas podem chamar o reducer diretamente

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

// ActionCreators para chamar as sagas
    // Essas ActionCreators irão chamar as sagas pois é preciso fazer uma chamada assíncrona
        // Só as sagas devem fazer chamadas assíncronas
    // Essas ActionCreators devem enviar os dados prontos para as sagas, então se é preciso fazer algum processamento, faça aqui
    // As ActionCreators que chamam as sagas são iguais a uma ActionCreator que chama um reducer
        // As sagas irão escutar o "type" que foi invocado, então o reducer não deve ter esses "type"s

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

// ActionCreators para as Sagas chamarem os reducers
    // Quando as sagas terminarem as chamadas assíncronas elas podem chamar uma Action para enviar os dados para o reducer

export const getSuccess = (users: User[]): UserActionTypes => ({
    type: UserAsyncTypes.GET_SUCCESS,
    payload: { data: users }
})