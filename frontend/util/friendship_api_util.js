export const createFriendship = friendship => (
  $.ajax({
    method: 'POST',
    url: `api/friendships`,
    data: { friendship },
  })
)

export const deleteFriendship = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/friendships/${id}`,
  })
)

export const fetchFriendship = id => (
  $.ajax({
    method: 'GET',
    url: `api/friendships/${id}`,
  })
)

export const fetchFriendships = () => (
  $.ajax({
    method: 'GET',
    url: `api/friendships`,
  })
)
