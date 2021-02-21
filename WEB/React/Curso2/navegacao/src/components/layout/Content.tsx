import './Content.css'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import About from '../../views/examples/About'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = (_: any) => (
    <main className="Content">
        <Switch>
            {/* O "Switch" envolve todas as rotas e carrega a primeira que der match na URL. O componente da rota é carregado no lugar do "Switch". Cuidado com a ordem das rotas e o uso da propriedade "exact" */}
            <Route path="/about">
                <About />
            </Route>
            <Route path="/param/:id">
                {/* Definindo um parâmetro "id" */}
                <Param />
            </Route>
            <Route exact path="/">
                {/* Se colocar a rota raiz("/") por último e não passar "exact", esta rota sempre será carregada, mesmo se a url não existir, pois a rota raiz dá match em tudo */}
                <Home />
            </Route>
            <Route path="*">
                {/* A rota "*" dá match em tudo, então é uma boa ideia deixar esta rota por último para dar match somente nas rotas que não existem e carregar um "404 not found" */}
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content