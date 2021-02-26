import { TodoItem } from '../../views/Todo'
import IconButton from './IconButton'

type Props = {
    list: TodoItem[]
    handleDelete: (id: number) => void
    handleToggleMark: (todo: TodoItem) => void
}

const TodoList: React.FC<Props> = props => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(todo => {
                        return (
                            <tr key={todo.id}>
                                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                                <td>
                                    <IconButton
                                        color="success"
                                        icon="check"
                                        onClick={() => props.handleToggleMark(todo)}
                                        hide={todo.done}
                                    />
                                    <IconButton
                                        color="warning"
                                        icon="undo"
                                        onClick={() => props.handleToggleMark(todo)}
                                        hide={!todo.done}
                                    />
                                    <IconButton
                                        color="danger"
                                        icon="trash-o"
                                        onClick={() => props.handleDelete(todo.id)}
                                        hide={!todo.done}
                                    />
                                </td>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )   
}

export default TodoList