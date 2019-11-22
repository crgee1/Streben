import merge from 'lodash/merge';
import { RECEIVE_WORKOUTS } from '../actions/workout_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT: 
      return merge({}, state, { [action.comment.id]: action.comment });
    case RECEIVE_COMMENTS:
      return merge({}, action.comments)
    case RECEIVE_WORKOUTS:
      return merge({}, action.payload.comments)
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  };
};

export default commentsReducer;
