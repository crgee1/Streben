export const createFollow = follow => (
  $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: { follow },
  })
)

export const deleteFollow = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
  })
)

export const fetchFollow = id => (
  $.ajax({
    method: 'GET',
    url: `api/follows/${id}`,
  })
)

export const fetchFollows = () => (
  $.ajax({
    method: 'GET',
    url: `api/follows`,
  })
)
