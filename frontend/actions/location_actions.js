import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const RECEIVE_LOCATION_ERRORS = 'RECEIVE_LOCATION_ERRORS';

const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location,
})

const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations,
})

const removeLocation = location => ({
  type: REMOVE_LOCATION,
  locationId: location.id
})

const receiveErrors = errors => ({
  type: RECEIVE_LOCATION_ERRORS,
  errors,
});

export const createLocation = location => dispatch => (
  APIUtil.createLocation(location)
    .then(location => (dispatch(receiveLocation(location))),
      err => (dispatch(receiveErrors(err.responseJSON))))
)

export const fetchLocation = id => dispatch => (
  APIUtil.fetchLocation(id)
    .then(location => (dispatch(receiveLocation(location)))),
    err => (dispatch(receiveErrors(err.responseJSON)))
)

export const fetchLocations = () => dispatch => (
  APIUtil.fetchLocations()
    .then(locations => (dispatch(receiveLocations(locations))),
      err => (dispatch(receiveErrors(err.responseJSON))))
)

export const updateLocation = location => dispatch => (
  APIUtil.updateLocation(location)
    .then(location => (dispatch(receiveLocation(location)))),
    err => (dispatch(receiveErrors(err.responseJSON)))
)

export const deleteLocation = id => dispatch => (
  APIUtil.deleteLocation(id)
    .then(location => (dispatch(removeLocation(location)))),
    err => (dispatch(receiveErrors(err.responseJSON)))
)
