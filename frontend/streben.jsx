import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './componets/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: window.currentUser },
    };
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
