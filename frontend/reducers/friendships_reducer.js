import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';

const friendshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDSHIP: 
      return merge({}, state, { [action.friendship.id]: action.friendship });
    case RECEIVE_USERS:
      return merge({}, action.payload.friendships)
    case REMOVE_FRIENDSHIP:
      let newState = merge({}, state);
      delete newState[action.friendshipId];
      return newState;
    default:
      return state;
  };
};

export default friendshipsReducer;
