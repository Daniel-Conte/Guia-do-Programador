import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store'
import {
    createUser,
    updateUser,
    deleteUser,
    readUser,
    readAllUsers,
    changeUserEmail,
    changeUserName,
    clearUser
} from '../store/user/actions'

import Main from '../components/template/Main'
import { useEffect } from 'react'
import { User } from '../store/user/types'

const mapState = (state: RootState) => {
    return {
        user: state.user.user,
        loading: state.user.loading,
        list: state.user.list
    }
}

const mapDispatch = {
    createUser,
    updateUser,
    deleteUser,
    readUser,
    readAllUsers,
    changeUserEmail,
    changeUserName,
    clearUser
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}


const Users: React.FC<Props> = props => {
    const saveUser = (user: User) => {
        console.log(user)
        if(user.id) {
            props.updateUser(user)
        } else {
            props.createUser(user)
        }
    }
    
    useEffect(() => {
        props.readAllUsers()
    }, [props.loading])

    return (
        <Main
            title="Usuários"
            subtitle="Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
            icon="users"
        >
            {/* Formulário de cadastro */}
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
                            <input type="email"
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
                        <button
                            className="btn btn-primary"
                            onClick={() => saveUser(props.user)}
                        >
                            Salvar
                        </button>
                        <button
                            className="btn btn-secondary ml-2"
                            onClick={() => props.clearUser()}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>

            {/* Lista dos usuários */}
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { props.list.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        onClick={() => props.readUser(user.id)}
                                    >
                                        <i className="fa fa-pencil" />
                                    </button>
                                    <button
                                        className="btn btn-danger ml-2"
                                        onClick={() => props.deleteUser(user.id)}
                                    >
                                        <i className="fa fa-trash" />
                                    </button>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </Main>
    )
}

export default connector(Users)