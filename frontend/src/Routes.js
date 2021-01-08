import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoutes from './auth/helper/PrivateRoutes'
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'
import UserDashboard from './user/UserDashboard'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Signin path="/signin" exact component={Signin} />
                <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
            </Switch>
        </Router>
    )
}

export default Routes
