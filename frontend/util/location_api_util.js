export const createLocation = location => (
  $.ajax({
    method: 'POST',
    url: `api/locations`,
    data: { location },
  })
)

export const updateLocation = location => (
  $.ajax({
    method: 'PATCH',
    url: `api/locations/${location.id}`,
    data: { location },
  })
)

export const fetchLocation = id => (
  $.ajax({
    method: 'GET',
    url: `api/locations/${id}`,
  })
)

export const fetchLocations = () => (
  $.ajax({
    method: 'GET',
    url: `api/locations`,
  })
)

export const deleteLocation = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/locations/${id}`,
  })
)
