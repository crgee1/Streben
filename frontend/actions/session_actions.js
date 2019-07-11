/* eslint-disable no-shadow */
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
})

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
      err => (dispatch(receiveErrors(err.responseJSON))))
);

export const signUp = user => dispatch => (
  APIUtil.signUp(user)
    .then(user => (dispatch(receiveCurrentUser(user))),
      err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => (dispatch(logoutCurrentUser())))
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
)