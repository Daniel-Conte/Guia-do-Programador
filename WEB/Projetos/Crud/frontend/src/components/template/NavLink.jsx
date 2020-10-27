/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
    <a href={`#/${props.href}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </a>