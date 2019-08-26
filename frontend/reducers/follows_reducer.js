import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW, RECEIVE_FOLLOWS } from '../actions/follow_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLLOW: 
      return merge({}, state, { [action.follow.id]: action.follow });
    case RECEIVE_FOLLOWS:
      return merge({}, action.follows)
    case RECEIVE_USERS:
      return merge({}, action.payload.follows)
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      delete newState[action.followId];
      return newState;
    default:
      return state;
  };
};

export default followsReducer;
