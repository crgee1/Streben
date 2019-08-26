import {
  RECEIVE_FOLLOW,
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOW_ERRORS,
} from '../actions/follow_actions';

import { CLEAR_ERRORS, } from '../actions/error_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FOLLOW_ERRORS:
      return action.errors;
    case RECEIVE_FOLLOW:
      return [];
    case RECEIVE_FOLLOWS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  };
};