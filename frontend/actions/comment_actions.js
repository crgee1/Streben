import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
})

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
})

const removeComment = comment => {
  return {
    type: REMOVE_COMMENT,
    commentId: comment.id
  }
}

const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors,
});

export const fetchComments = () => dispatch => (
  APIUtil.fetchComments()
    .then(comments => dispatch(receiveComments(comments)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteComment = id => dispatch => (
  APIUtil.deleteComment(id)
    .then(comment => dispatch(removeComment(comment)))
)
