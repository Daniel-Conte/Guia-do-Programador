import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store'
import { createUser, deleteUser, readUser, updateUser, changeUserEmail, changeUserName } from '../store/user/actions'

import Main from '../components/template/Main'

const mapState = (state: RootState) => {
    return {
        user: state.user.user,
        list: state.user.list
    }
}

const mapDispatch = {
    createUser,
    deleteUser,
    readUser,
    updateUser,
    changeUserEmail,
    changeUserName
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

const Users: React.FC<Props> = props => {
    return (
        <Main
            title="Usuários"
            subtitle="Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
            icon="users"
        >
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={props.user.name}
                                onChange={e => props.changeUserName(e)}
                                placeholder="Digite o nome..."
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text"
                                className="form-control"
                                name="email"
                                value={props.user.email}
                                onChange={e => props.changeUserEmail(e)}
                                placeholder="Digite o e-mail..."
                            />
                        </div>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary">
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default connector(Users)