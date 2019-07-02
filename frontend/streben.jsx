import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './componets/root'
import { signUp } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.signUp = signUp;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<Root store={store} />, root);
});