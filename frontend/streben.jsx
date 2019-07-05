import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './componets/root';
import {createRoute, fetchRoute, fetchRoutes, updateRoute, deleteRoute} from './actions/route_actions';

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
  window.fetchRoute = fetchRoute;
  window.fetchRoutes = fetchRoutes;
  window.updateRoute = updateRoute;
  window.deleteRoute = deleteRoute;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko&callback=initMap">
  </script>
  ReactDOM.render(<Root store={store} />, root);
});
