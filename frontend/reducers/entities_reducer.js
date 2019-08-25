import { combineReducers } from 'redux';
import users from './users_reducer';
import routes from './routes_reducer';
import locations from './locations_reducer';
import workouts from './workouts_reducer';
import friendships from './friendships_reducer';

export default combineReducers({
  users,
  friendships,
  routes,
  locations,
  workouts,
});
