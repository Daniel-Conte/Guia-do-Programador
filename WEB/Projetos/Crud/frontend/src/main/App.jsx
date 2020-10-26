/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../components/template/Logo'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React." />
        <Footer />
    </div>