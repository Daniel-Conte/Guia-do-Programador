/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Button from './Button'

export default props =>
    <tr key={props.id}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>
            <Button class="btn btn-warning" click={props.load}>
                <i className="fa fa-pencil"></i>
            </Button>
            <Button class="btn btn-danger ml-2" click={props.remove}>
                <i className="fa fa-trash"></i>
            </Button>
        </td>
    </tr>