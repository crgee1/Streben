import * as APIUtil from '../util/user_api_util';

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

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(user => (dispatch(receiveUser(user))),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers()
    .then(users => (dispatch(receiveUsers(users))),
  err => dispatch(receiveErrors(err.responseJSON)))
)
