/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        {/*
        - "Switch" é um componente que vai agrupar vários componentes "Route"
        - O "Switch" vai renderizar somente a PRIMEIRA "Route" que der match com o "path", isso impede que várias "Route" sejam renderizadas juntas(Que é o caso de usar "Router" no lugar de "Switch")
        */}
        <Route exact path="/" component={Home} />
            {/*
            - "Route" é um componente que serve para realizar a navegação entre URLs
            - "exact" significa que a URL precisa ser exatamente essa para fazer a navegação
                - Esse componente só vai ser ativado quando a URL for exatamente "/"
            - "path" é a URL que vai ativar esse componente
                - É uma expressão regular(RegExp), então cuide como vai implementar.
            - "component" é o componente que vai ser renderizado
            - É possível colocar o componente como filho de "Route"
            */}
        <Route path="/users" component={UserCrud} />
            {/* Qualquer URL que começar com "/users/" vai dar match */}

        <Redirect from="*" to="/" />
            {/*
            - "Redirect" vai redirecionar uma rota/URL para outra
            - "from" é o caminho que vai ser redirecionado
                - É uma expressão regular(RegExp)
                - "*"(RegExp) vai pegar todas as URLs
                - Só funciona quando o "Redirect" tá dentro do "Switch"
            - "to" é para onde vai ser redirecionado
            - Nesse caso, quando uma URL não der match em alguma "Route", o "Redirect" é ativado já que dá match em todas as URLs. Funciona como se fosse um "default".
            */}
    </Switch>