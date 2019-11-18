import { combineReducers } from 'redux';
import users from './users_reducer';
import routes from './routes_reducer';
import locations from './locations_reducer';
import workouts from './workouts_reducer';
import follows from './follows_reducer';
import likes from './likes_reducer';

export default combineReducers({
  users,
  follows,
  routes,
  locations,
  workouts,
  likes
});
