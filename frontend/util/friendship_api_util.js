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
