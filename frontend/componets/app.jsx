import React from 'react';
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import DemoLoginContainer from './session/demo_login_container';
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <ProtectedRoute path='/dashboard' component={DashboardContainer}/>
        <AuthRoute path="/signup" component={SignUpContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <Route path="/demo" component={DemoLoginContainer} />
        <AuthRoute exact path='/' component={Splash} />
        <AuthRoute exact path='//' component={Splash} />
    </div>
);

export default App