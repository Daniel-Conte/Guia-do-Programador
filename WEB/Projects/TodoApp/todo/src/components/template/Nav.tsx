import { Switch, Route, Redirect } from "react-router-dom"

import Todo from '../../views/Todo'
import About from '../../views/About'

const Nav: React.FC = () => {
    return (
        <div>
            <Switch>
                <Route path="/todos" component={Todo} />
                <Route path="/about" component={About} />
                <Redirect from="*" to="/todos" />
            </Switch>
        </div>
    )
}

export default Nav