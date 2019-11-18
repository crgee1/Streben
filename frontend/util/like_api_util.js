export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: `api/likes`,
    data: { like },
  })
)

export const deleteLike = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${id}`,
  })
)

export const fetchLike = id => (
  $.ajax({
    method: 'GET',
    url: `api/likes/${id}`,
  })
)

export const fetchLikes = () => (
  $.ajax({
    method: 'GET',
    url: `api/likes`,
  })
)
