import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import DemoLoginContainer from './session/demo_login_container';
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container'
import RouteComponent from './route/route';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path='/' component={Splash} />
            <ProtectedRoute path='/dashboard' component={DashboardContainer}/>
            <ProtectedRoute path='/routes' component={RouteComponent} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <Route path="/demo" component={DemoLoginContainer} />
        </Switch>
    </div>
);

export default App