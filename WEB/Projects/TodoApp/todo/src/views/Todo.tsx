import { useEffect, useState } from 'react'
import axios from 'axios'
import PageHeader from '../components/template/PageHeader'
import TodoForm from '../components/template/TodoForm'
import TodoList from '../components/template/TodoList'

type TodoItem = {
    id: number
    description: string
    done: boolean
}

const initialState = {
    description: '',
    list: Array<TodoItem>()
}

const URL = 'http://localhost:3001/todos'

function searchTodos(search: string, todos: TodoItem[]): TodoItem[] {
    const regex = new RegExp(search, 'i')

    return todos.filter(todo => todo.description.match(regex))
}

const Todo: React.FC = () => {
    const [state, setState] = useState(initialState)

    function refresh(description = '') {
        const isSearch = !!description

        axios.get<TodoItem[]>(URL)
            .then(resp => {
                const sortedData = resp.data.sort((a, b) => b.id - a.id)
                const list = isSearch ? searchTodos(description, sortedData) : sortedData

                setState({
                    ...state,
                    description,
                    list
                })
            })
    }

    useEffect(() => {
        refresh()
    }, [])
    
    function handleAdd() {
        const item = {
            description: state.description,
            done: false
        }

        axios.post<TodoItem>(URL, item)
            .then(() => refresh())
    }

    function handleToggleMark(todo: TodoItem) {
        const item = {
            ...todo,
            done: !todo.done
        }

        axios.put<TodoItem>(`${URL}/${todo.id}`, item)
            .then(() => refresh(state.description))
    }

    function handleSearch() {
        refresh(state.description)
    }
    function handleClear() {
        refresh()
    }

    function handleDelete(id: number) {
        axios.delete<TodoItem>(`${URL}/${id}`)
            .then(() => refresh(state.description))
    }
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setState({
            ...state,
            description: e.target.value
        })
    }

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm
                handleAdd={handleAdd}
                handleChange={handleChange}
                handleSearch={handleSearch}
                handleClear={handleClear}
            />
            <TodoList
                list={state.list}
                handleDelete={handleDelete}
                handleToggleMark={handleToggleMark}
            />
        </div>
    )
}

export default Todo
export type {
    TodoItem
}