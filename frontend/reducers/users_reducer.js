import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  };
};

export default usersReducer;
