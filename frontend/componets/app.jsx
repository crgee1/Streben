import React from 'react';
import { Route } from 'react-router-dom';
import SignUpContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/login" component={LoginContainer} />
    </div>
);

export default App