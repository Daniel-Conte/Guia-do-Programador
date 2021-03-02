import IconButton from './IconButton'

import { toggleMark, del } from '../../store/todo/actions'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../store/storeConfig'

const mapState = (state: RootState) => {
    return {
        description: state.todo.description,
        list: state.todo.list
    }
}

const mapDispatch = {
    toggleMark,
    del
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const TodoList: React.FC<Props> = props => {
    const { toggleMark, del, list, description } = props

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {list.map(todo => {
                    return (
                        <tr key={todo.id}>
                            <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                            <td>
                                <IconButton
                                    color="success"
                                    icon="check"
                                    onClick={() => toggleMark(todo, description)}
                                    hide={todo.done}
                                />
                                <IconButton
                                    color="warning"
                                    icon="undo"
                                    onClick={() => toggleMark(todo, description)}
                                    hide={!todo.done}
                                />
                                <IconButton
                                    color="danger"
                                    icon="trash-o"
                                    onClick={() => del(todo.id, description)}
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

export default connector(TodoList)