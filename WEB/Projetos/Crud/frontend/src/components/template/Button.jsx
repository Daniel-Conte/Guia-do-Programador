/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props =>
    <button className={props.class} onClick={props.click}>
        {props.name}
    </button>