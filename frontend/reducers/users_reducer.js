import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
import { RECEIVE_WORKOUT, RECEIVE_WORKOUTS } from '../actions/workout_actions';
import { RECEIVE_ROUTE } from '../actions/route_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_WORKOUT: 
      return merge({}, state, { [action.payload.users.id]: action.payload.users})
    case RECEIVE_WORKOUTS:
      return merge({}, action.payload.users)
    case RECEIVE_ROUTE:
      return merge({}, state, { [action.payload.users.id]: action.payload.users })
    default:
      return state;
  };
};

export default usersReducer;
