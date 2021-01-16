/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={`/${props.href}`}>
        {/*
        - "link" é um componente que tem a mesma função da tag "a" do HTML.
        - "to" é onde fica a URL, mesma coisa do "href" da tag "a".
        */}
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </Link>