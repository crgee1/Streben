import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like,
})

const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes,
})

const removeLike = like => {
  return {
    type: REMOVE_LIKE,
    likeId: like.id
  }
}

const receiveErrors = errors => ({
  type: RECEIVE_LIKE_ERRORS,
  errors,
});

export const fetchLikes = () => dispatch => (
  APIUtil.fetchLikes()
    .then(likes => dispatch(receiveLikes(likes)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const createLike = like => dispatch => (
  APIUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteLike = id => dispatch => (
  APIUtil.deleteLike(id)
    .then(like => dispatch(removeLike(like)))
)
