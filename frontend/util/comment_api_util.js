export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `api/comments`,
    data: { comment },
  })
)

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
  })
)

export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${id}`,
  })
)

export const fetchComments = () => (
  $.ajax({
    method: 'GET',
    url: `api/comments`,
  })
)
