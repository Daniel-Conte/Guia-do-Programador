import Grid from './Grid'
import IconButton from './IconButton'

import { RootState } from '../../store/storeConfig'
import { changeDescription } from '../../store/todo/actions'

import { connect, ConnectedProps } from 'react-redux'

const mapState = (state: RootState) => {
    return {
        description: state.todo.description
    }
}

const mapDispatch = {
    changeDescription
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type OwnProps = {
    handleAdd: () => void
    handleSearch: () => void
    handleClear: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type Props = PropsFromRedux & OwnProps

const TodoForm: React.FC<Props> = props => {
    function keyHandler(e: React.KeyboardEvent) {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape') {
            props.handleClear()
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
                    onChange={e => props.changeDescription(e)}
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton
                    color="primary"
                    icon="plus"
                    onClick={props.handleAdd}
                />
                <IconButton
                    color="info"
                    icon="search"
                    onClick={props.handleSearch}
                />
                <IconButton
                    color="default"
                    icon="close"
                    onClick={props.handleClear}
                />
            </Grid>
        </div>
    )   
}

export default connector(TodoForm)