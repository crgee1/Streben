import merge from 'lodash/merge';
import { 
  RECEIVE_ROUTE, 
  RECEIVE_ROUTES, 
  REMOVE_ROUTE, 
} from '../actions/route_actions';

const routesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE:
      return merge({}, state, { [action.route.id]: action.route });
    case RECEIVE_ROUTES:
      return merge({}, action.routes)
    case REMOVE_ROUTE:
      debugger
      let newState = merge({}, state);
      delete newState[action.routeId];
      return newState;
    default:
      return state;
  }
};

export default routesReducer;
