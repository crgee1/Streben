import merge from 'lodash/merge';
import {
  RECEIVE_LOCATION,
  RECEIVE_LOCATIONS,
  REMOVE_LOCATION,
} from '../actions/location_actions';

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
    default:
      return state;
  }
};

export default locationsReducer;
