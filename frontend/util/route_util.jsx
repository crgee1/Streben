import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Componet }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to='/' /> : <Componet {...props} />
        )}
    />
);

const Protected = ({ loggedIn, path, component: Componet }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Componet {...props} /> : <Redirect to='/signup' />
        )}
    />
);

export const AuthRoute = withRouter(connect(mapStateToProps, Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, Protected));