import * as APIUtil from '../util/user_api_util';

export const START_LOADING_MANY = 'START_LOADING_MANY';
export const START_LOADING_ONE = 'START_LOADING_ONE';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload,
})

const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  payload,
})

const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

const startLoadingMany = () => ({
  type: START_LOADING_MANY
});

const startLoadingOne = () => ({
  type: START_LOADING_ONE
});

export const fetchUser = id => dispatch => {
  dispatch(startLoadingOne());
  return APIUtil.fetchUser(id)
    .then(user => (dispatch(receiveUser(user))),
  err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchUsers = () => dispatch => {
  dispatch(startLoadingMany());
  return APIUtil.fetchUsers()
    .then(users => (dispatch(receiveUsers(users))),
  err => dispatch(receiveErrors(err.responseJSON)))
}
