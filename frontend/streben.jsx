import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './componets/root'
import {login, signUp} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: { currentUser: window.currentUser }
        };
    }
    const root = document.getElementById('root');
    const store = configureStore(preloadedState);
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.login = login;
    window.signUp = signUp;
    ReactDOM.render(<Root store={store} />, root);
});