import Grid from './Grid'
import IconButton from './IconButton'

type Props = {
    handleAdd: () => void
    handleSearch: () => void
    handleClear: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    description: string
}

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
                    onChange={e => props.handleChange(e)}
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

export default TodoForm