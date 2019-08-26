import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import routes from './routes_errors_reducer';
import locations from './locations_errors_reducer';
import workouts from './workouts_errors_reducer';
import follows from './follows_errors_reducer';

export default combineReducers({
  session,
  routes,
  locations,
  follows,
  workouts,
});
