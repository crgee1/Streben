import {
  RECEIVE_WORKOUT,
  RECEIVE_WORKOUTS,
  RECEIVE_WORKOUT_ERRORS,
} from '../actions/workout_actions';

import { CLEAR_ERRORS, } from '../actions/error_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_WORKOUT_ERRORS:
      return action.errors;
    case RECEIVE_WORKOUT:
      return [];
    case RECEIVE_WORKOUTS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  };
};