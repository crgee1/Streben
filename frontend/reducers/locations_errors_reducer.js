import {
  RECEIVE_LOCATION,
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION_ERRORS,
} from '../actions/location_actions';

import { CLEAR_ERRORS, } from '../actions/error_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LOCATION_ERRORS:
      return action.errors;
    case RECEIVE_LOCATION:
      return [];
    case RECEIVE_LOCATIONS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  };
};