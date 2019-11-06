import * as APIUtil from '../util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow,
})

const receiveFollows = follows => ({
  type: RECEIVE_FOLLOWS,
  follows,
})

const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    followId: follow.id
  }
}

const receiveErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors,
});

export const fetchFollows = () => dispatch => (
  APIUtil.fetchFollows()
    .then(follows => dispatch(receiveFollows(follows)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const createFollow = follow => dispatch => (
  APIUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteFollow = id => dispatch => (
  APIUtil.deleteFollow(id)
    .then(follow => dispatch(removeFollow(follow)))
)
