import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import routes from './routes_errors_reducer';

export default combineReducers({
  session,
  routes,
});
