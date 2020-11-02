import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Form from '../template/Form'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
            // Quando for alterar o usuário o id está presente, já quando for adicionar o id não está presente (pois não foi adicionado ainda)
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
            // Clona a lista do State com o usuário removido (no caso de "put")
        list.unshift(user)
            // Adiciona o usuário no início da lista
        return list
    }

    updatedField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
            // "[]" outra maneira de acessar um atributo
        this.setState({ user })
    }

    render() {
        return (
            <Main {...headerProps}>
                <Form change={e => this.updatedField(e)} nameValue={this.state.user.name} emailValue={this.state.user.email} save={e => this.save(e)} cancel={e => this.clear(e)}/>
            </Main>
        )
    }
}