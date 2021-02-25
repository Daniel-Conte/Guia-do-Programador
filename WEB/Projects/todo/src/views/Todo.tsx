import { useState } from 'react'
import PageHeader from '../components/template/PageHeader'
import TodoForm from '../components/template/TodoForm'
import TodoList from '../components/template/TodoList'

const initialState = {
    description: '',
    list: Array<string>()
}

const Todo: React.FC = () => {
    const [state, setState] = useState(initialState)

    function handleAdd() {
        console.log('Add')    
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
            <TodoList />
        </div>
    )
}

export default Todo