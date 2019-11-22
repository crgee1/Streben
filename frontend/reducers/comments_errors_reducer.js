import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT_ERRORS,
} from '../actions/comment_actions';

import { CLEAR_ERRORS, } from '../actions/error_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_COMMENT_ERRORS:
      return action.errors;
    case RECEIVE_COMMENT:
      return [];
    case RECEIVE_COMMENTS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  };
};