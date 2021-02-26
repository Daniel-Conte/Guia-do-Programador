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

const Todo: React.FC = () => {
    const [state, setState] = useState(initialState)

    function refresh() {
        axios.get(`${URL}?sort=-createdAt`) // Ordena os itens por data de criação
            .then(resp => setState({
                ...state,
                description: '',
                list: resp.data
            }))
    }

    useEffect(() => {
        refresh()
    }, [])
    
    function handleAdd() {
        const item = {
            description: state.description,
            done: false
        }

        axios.post(URL, item)
            .then(() => refresh())
    }

    function handleToggleMark(todo: TodoItem) {
        const item = {
            ...todo,
            done: !todo.done
        }

        axios.put(`${URL}/${todo.id}`, item)
            .then(() => refresh())
    }

    function handleDelete(id: number) {
        axios.delete(`${URL}/${id}`)
            .then(() => refresh())
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
                description={state.description}
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