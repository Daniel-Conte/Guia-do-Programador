import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../views/Home'
import Users from '../views/Users'

const Routes: React.FC = () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Redirect from="*" to="/" />
    </Switch>

export default Routes