import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './componets/root';
import { 
  createWorkout,
  fetchWorkout,
  fetchWorkouts,
  updateWorkout,
  deleteWorkout,
 } from './actions/workout_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: window.currentUser },
    };
  }
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.createWorkout = createWorkout;
  // window.fetchWorkout = fetchWorkout;
  // window.fetchWorkouts = fetchWorkouts;
  // window.updateWorkout = updateWorkout;
  // window.deleteWorkout = deleteWorkout;

  ReactDOM.render(<Root store={store} />, root);
});
