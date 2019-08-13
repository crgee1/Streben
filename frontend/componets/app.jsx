import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from '../componets/modal/modal';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import DemoLoginContainer from './session/demo_login_container';
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container'
import RouteIndexContainer from './route/route_index_container';
import ShowRouteContainer from './route/show_route_container';
import NewRouteBuilderContainer from './route/new_route_builder_container';
import EditRouteContainer from './route/edit_route_container';
import IndexWorkoutContainer from './workout/index_workout_container';
import ShowWorkoutContainer from './workout/show_workout_container';
import NewWorkoutContainer from './workout/new_workout_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import EditWorkoutContainer from './workout/edit_workout_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path='/' component={Splash} />
            <ProtectedRoute path='/dashboard' component={DashboardContainer}/>
            <ProtectedRoute path='/routes/new' component={NewRouteBuilderContainer} />
            <ProtectedRoute path='/routes/edit/:routeId' component={EditRouteContainer} />
            <ProtectedRoute path='/routes/:routeId' component={ShowRouteContainer} />
            <ProtectedRoute path='/routes' component={RouteIndexContainer} />
            <ProtectedRoute path='/training/new' component={NewWorkoutContainer} />
            <ProtectedRoute path='/training/edit/:workoutId' component={EditWorkoutContainer} />
            <ProtectedRoute path='/training/:workoutId' component={ShowWorkoutContainer} />
            <ProtectedRoute path='/training' component={IndexWorkoutContainer} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            <AuthRoute path="/demo" component={DemoLoginContainer} />
        </Switch>
    </div>
);

export default App