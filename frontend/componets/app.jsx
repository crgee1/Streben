import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import DemoLoginContainer from './session/demo_login_container';
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container'
import RouteComponent from './route/route';
import NewRoute from './route/new_route';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path='/' component={Splash} />
            <ProtectedRoute path='/dashboard' component={DashboardContainer}/>
            <ProtectedRoute exact path='/routes' component={RouteComponent} />
            <ProtectedRoute path='/routes/new' component={NewRoute} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/demo" component={DemoLoginContainer} />
        </Switch>
    </div>
);

export default App