import merge from 'lodash/merge';
import { RECEIVE_WORKOUTS } from '../actions/workout_actions';
import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_LIKES } from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE: 
      return merge({}, state, { [action.like.id]: action.like });
    case RECEIVE_LIKES:
      return merge({}, action.likes)
    case RECEIVE_WORKOUTS:
      return merge({}, action.payload.likes)
    case REMOVE_LIKE:
      let newState = merge({}, state);
      delete newState[action.likeId];
      return newState;
    default:
      return state;
  };
};

export default likesReducer;
