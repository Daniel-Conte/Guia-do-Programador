import {
    DESCRIPTION_CHANGED,
    TODO_SEARCHED,
    TodoActionTypes,
    TodoItem,
    ThunkResult
} from './types'

import axios from 'axios'

const URL = 'http://localhost:3001/todos'

function searchTodos(search: string, todos: TodoItem[]): TodoItem[] {
    const regex = new RegExp(search, 'i')

    return todos.filter(todo => todo.description.match(regex))
}

export function changeDescription(
    event: React.ChangeEvent<HTMLInputElement>
): TodoActionTypes {
    const newDesc = event.target.value

    return {
        type: DESCRIPTION_CHANGED,
        payload: newDesc
    }
}

// Ao fazer requisições assíncronas(promises) é necessário utilizar um middleware, pois a Action vai chamar o reducer antes que a requisição fique pronta
    // O middleware será usado na criação da Store
export function search(description = ''): ThunkResult<void> {
    const isSearch = !!description

    return dispatch => {
        axios.get<TodoItem[]>(URL)
            .then(resp => {
                const sortedData = resp.data.sort((a, b) => b.id - a.id)

                const list = isSearch ? searchTodos(description, sortedData) : sortedData

                // "dispatch" vindo do "redux-thunk", dispara uma Action
                dispatch({
                    type: TODO_SEARCHED,
                    payload: {
                        description,
                        list
                    }
                })
            })
    }
}

export function add(description: string): ThunkResult<void> {
    const item = {
        description,
        done: false
    }

    return dispatch => {
        axios.post<TodoItem>(URL, item)
            // É possível encadear "dispatch" para invocar várias Actions em uma só chamada de Action Creator
            .then(() => dispatch(search()))
    }
}

export function del(id: number, description?: string): ThunkResult<void> {
    return dispatch => {
        axios.delete<TodoItem>(`${URL}/${id}`)
            .then(() => dispatch(search(description)))
    }
}

export function toggleMark(
    todo: TodoItem,
    description?: string
): ThunkResult<void> {
    const item = {
        ...todo,
        done: !todo.done
    }

    return dispatch => {
        axios.put<TodoItem>(`${URL}/${todo.id}`, item)
            .then(() => dispatch(search(description)))

    }
}