/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import Logo from '../components/template/Logo'
import Routes from './Routes'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        {/*
        -> "HashRouter"
            - Todos os browsers suportam
            - Independe do server-side pra funcionar (client-side)
            - Utiliza "#" na URL para renderizar os componentes
            - Todo o conteúdo da URL que estiver após "#" (é processado pelo client-side) não é enviado para o servidor, só é enviado o que está antes

        -> BrowserRouter
            - Alguns browsers antigos não suportam
            - Usa a "history API" do HTML5 para renderizar os componentes
            - Não adiciona "#" na URL
            - Toda a URL é enviada para o servidor
            - O servidor precisa ser configurado para SPA(Single-page-application), senão cada rota diferente o servidor vai procurar por um arquivo html diferente
            - As rotas configuradas no client-side devem existir no server-side, senão irá retornar erros 404 not found
            - Mais fácil de dar problemas na produção por causa desse relacionamento com o servidor
        */}
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>