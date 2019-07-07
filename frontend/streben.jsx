import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './componets/root';
import { 
  createLocation,
  fetchLocation,
  fetchLocations,
  updateLocation,
  deleteLocation,
 } from './actions/location_actions';

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
  window.dispatch = store.dispatch;
  window.createLocation = createLocation;
  window.fetchLocation = fetchLocation;
  window.fetchLocations = fetchLocations;
  window.updateLocation = updateLocation;
  window.deleteLocation = deleteLocation;

  ReactDOM.render(<Root store={store} />, root);
});
