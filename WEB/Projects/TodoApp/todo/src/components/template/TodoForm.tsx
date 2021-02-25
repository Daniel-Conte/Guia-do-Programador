import Grid from './Grid'
import IconButton from './IconButton'

type Props = {
    handleAdd: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    description: string
}

const TodoForm: React.FC<Props> = props => {
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
                />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton
                    color="primary"
                    icon="plus"
                    onClick={props.handleAdd}
                />
            </Grid>
        </div>
    )   
}

export default TodoForm