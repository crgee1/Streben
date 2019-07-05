import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './componets/root';
import {createRoute} from './actions/route_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: window.currentUser },
    };
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  window.createRoute = createRoute;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
