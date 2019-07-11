import merge from 'lodash/merge';
import {
  RECEIVE_WORKOUT,
  RECEIVE_WORKOUTS,
  REMOVE_WORKOUT,
} from '../actions/workout_actions';

const workoutsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WORKOUT:
      return merge({}, state, { [action.payload.workouts.id]: action.payload.workouts });
    case RECEIVE_WORKOUTS:
      return merge({}, action.payload.workouts)
    case REMOVE_WORKOUT:
      let newState = merge({}, state);
      delete newState[action.workoutId];
      return newState;
    default:
      return state;
  }
};

export default workoutsReducer;
