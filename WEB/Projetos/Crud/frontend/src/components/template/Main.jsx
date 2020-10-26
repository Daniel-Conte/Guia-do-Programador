/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Header from './Header'
import './Main.css'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main className="content">
            Main
        </main>
    </React.Fragment>