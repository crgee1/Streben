import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/user_actions';

const friendshipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, action.payload.friendships)
    default:
      return state;
  };
};

export default friendshipsReducer;
