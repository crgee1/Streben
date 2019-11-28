import merge from 'lodash/merge';
import {  RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { START_LOADING_MANY, START_LOADING_ONE } from '../actions/session_actions';
import { RECEIVE_WORKOUTS, RECEIVE_WORKOUT } from '../actions/workout_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ROUTES, RECEIVE_ROUTE } from '../actions/route_actions';

const initialState = {
  indexLoading: false,
  detailLoading: false
};

export default function loadingReducer(state = initialState, action) {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ROUTES:
    case RECEIVE_WORKOUTS:
    case RECEIVE_USERS:
        return merge({}, state, { indexLoading: false });
    case RECEIVE_CURRENT_USER:
    case RECEIVE_ROUTE:
    case RECEIVE_WORKOUT:
    case RECEIVE_USER:
      return merge({}, state, { detailLoading: false });
    case START_LOADING_MANY:
      return merge({}, state, { indexLoading: true });
    case START_LOADING_ONE:
      return merge({}, state, { detailLoading: true });
    default:
      return state;
  }
}
