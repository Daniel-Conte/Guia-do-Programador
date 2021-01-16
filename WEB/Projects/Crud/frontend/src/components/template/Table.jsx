/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
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
            {props.children}
        </tbody>
    </table>