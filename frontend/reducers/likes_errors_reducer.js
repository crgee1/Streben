import {
  RECEIVE_LIKE,
  RECEIVE_LIKES,
  RECEIVE_LIKE_ERRORS,
} from '../actions/like_actions';

import { CLEAR_ERRORS, } from '../actions/error_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKE_ERRORS:
      return action.errors;
    case RECEIVE_LIKE:
      return [];
    case RECEIVE_LIKES:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  };
};