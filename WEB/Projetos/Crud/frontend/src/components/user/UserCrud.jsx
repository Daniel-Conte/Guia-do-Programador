import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Form from '../template/Form'
import Table from '../template/Table'
import TableRow from '../template/TableRow'

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

    componentDidMount() {
        axios(baseUrl) // GET
            .then(resp => this.setState({ list: resp.data }))
    }

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

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
            // Clona a lista do State com o usuário removido (no caso de "put")
        if(add) list.unshift(user)
            // Adiciona o usuário no início da lista
        return list
    }

    updatedField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
            // "[]" outra maneira de acessar um atributo
        this.setState({ user })
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`)
            .then(resp => {
                const list = this.getUpdatedList(user, false)
                this.setState({ list })
            })
    }

    renderRows() {
        return this.state.list.map(user => {
            return <TableRow id={user.id} name={user.name} email={user.email} load={() => this.load(user)} remove={() => this.remove(user)} />
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                <Form change={e => this.updatedField(e)} nameValue={this.state.user.name} emailValue={this.state.user.email} save={e => this.save(e)} cancel={e => this.clear(e)}/>

                <Table>
                    {this.renderRows()}
                </Table>
            </Main>
        )
    }
}