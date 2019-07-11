import merge from 'lodash/merge';
import {
  RECEIVE_LOCATION,
  RECEIVE_LOCATIONS,
  REMOVE_LOCATION,
} from '../actions/location_actions';
import { RECEIVE_ROUTE, RECEIVE_ROUTES } from '../actions/route_actions'

const locationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATION:
      return merge({}, state, { [action.location.id]: action.location });
    case RECEIVE_LOCATIONS:
      return merge({}, action.locations)
    case REMOVE_LOCATION:
      let newState = merge({}, state);
      delete newState[action.locationId];
      return newState;
    case RECEIVE_ROUTE:
      return merge({}, state, action.payload.locations)
    case RECEIVE_ROUTES:
      return merge({}, action.payload.locations)
    default:
      return state;
  }
};

export default locationsReducer;
