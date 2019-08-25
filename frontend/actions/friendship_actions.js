import * as APIUtil from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const RECEIVE_FRIENDSHIPS = 'RECEIVE_FRIENDSHIPS';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';
export const RECEIVE_FRIENDSHIP_ERRORS = 'RECEIVE_FRIENDSHIP_ERRORS';

const receiveFriendship = friendship => ({
  type: RECEIVE_FRIENDSHIP,
  friendship,
})

const receiveFriendships = friendships => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships,
})

const removeFriendship = friendship => {
  return {
    type: REMOVE_FRIENDSHIP,
    friendshipId: friendship.id
  }
}

const receiveErrors = errors => ({
  type: RECEIVE_FRIENDSHIP_ERRORS,
  errors,
});

export const fetchFriendships = () => dispatch => (
  APIUtil.fetchFriendships()
    .then(friendships => dispatch(receiveFriendships(friendships)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const createFriendship = friendship => dispatch => (
  APIUtil.createFriendship(friendship)
    .then(friendship => dispatch(receiveFriendship(friendship)),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteFriendship = id => dispatch => (
  APIUtil.deleteFriendship(id)
    .then(friendship => dispatch(removeFriendship(friendship)))
)
