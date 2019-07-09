import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from '../componets/modal/modal';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import DemoLoginContainer from './session/demo_login_container';
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container'
import RouteComponent from './route/route_container';
import ShowRouteComponent from './route/show_route';
import NewRouteBuilderContainer from './route/new_route_builder_container';
import EditRouteContainer from './route/edit_route_container';
import TrainingContainer from './training/training_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path='/' component={Splash} />
            <ProtectedRoute path='/dashboard' component={DashboardContainer}/>
            <ProtectedRoute path='/routes/new' component={NewRouteBuilderContainer} />
            <ProtectedRoute path='/routes/edit/:routeId' component={EditRouteContainer} />
            <ProtectedRoute path='/routes/:routeId' component={ShowRouteComponent} />
            <ProtectedRoute path='/routes' component={RouteComponent} />
            <ProtectedRoute path='/training' component={TrainingContainer} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/demo" component={DemoLoginContainer} />
        </Switch>
    </div>
);

export default App