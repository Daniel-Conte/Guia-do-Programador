import { useEffect } from 'react'

import PageHeader from '../components/template/PageHeader'
import TodoForm from '../components/template/TodoForm'
import TodoList from '../components/template/TodoList'

import { search } from '../store/todo/actions'
import { RootState } from '../store/storeConfig'

import { connect, ConnectedProps } from 'react-redux'

const mapState = (state: RootState) => {
    return {}
}

const mapDispatch = {
    search
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Todo: React.FC<Props> = props => {
    const { search } = props

    useEffect(() => {
        search()
    }, [])

    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default connector(Todo)