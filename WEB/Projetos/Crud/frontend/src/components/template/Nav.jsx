/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import NavLink from './NavLink'
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavLink href="" icon="home" title="Início" />
            <NavLink href="users" icon="users" title="Usuários" />
        </nav>
    </aside>