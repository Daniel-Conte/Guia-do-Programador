import Grid from './Grid'
import IconButton from './IconButton'

import { RootState } from '../../store/storeConfig'
import { changeDescription, add, search } from '../../store/todo/actions'

import { connect, ConnectedProps } from 'react-redux'

const mapState = (state: RootState) => {
    return {
        description: state.todo.description
    }
}

const mapDispatch = {
    changeDescription,
    search,
    add
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const TodoForm: React.FC<Props> = props => {
    const { description, changeDescription , add, search } = props

    function keyHandler(e: React.KeyboardEvent) {
        if(e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description)
        } else if(e.key === 'Escape') {
            search()
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa..."
                    value={props.description}
                    onChange={e => changeDescription(e)}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton
                    color="primary"
                    icon="plus"
                    onClick={() => add(description)}
                />
                <IconButton
                    color="info"
                    icon="search"
                    onClick={() => search(description)}
                />
                <IconButton
                    color="default"
                    icon="close"
                    onClick={() => search()}
                />
            </Grid>
        </div>
    )   
}

export default connector(TodoForm)