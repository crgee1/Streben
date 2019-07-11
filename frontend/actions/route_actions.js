import * as APIUtil from '../util/route_api_util';

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

const receiveRoute = route => ({
  type: RECEIVE_ROUTE,
  route,
})

const receiveRoutes = routes => ({
  type: RECEIVE_ROUTES,
  routes,
})

const removeRoute = routeId => ({
  type: REMOVE_ROUTE,
  routeId
})

const receiveErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors,
});

export const createRoute = route => dispatch => {
  return(
  APIUtil.createRoute(route)
    .then(route => (dispatch(receiveRoute(route))),
  err => (dispatch(receiveErrors(err.responseJSON))))
  )}

export const fetchRoute = id => dispatch => (
  APIUtil.fetchRoute(id)
    .then(route => (dispatch(receiveRoute(route))))
)

export const fetchRoutes = () => dispatch => (
  APIUtil.fetchRoutes()
    .then(routes => (dispatch(receiveRoutes(routes))),
  err => (dispatch(receiveErrors(err.responseJSON))))
)

export const updateRoute = route => dispatch => (
  APIUtil.updateRoute(route)
    .then(route => (dispatch(receiveRoute(route))),
      err => (dispatch(receiveErrors(err.responseJSON))))
)

export const deleteRoute = id => dispatch => {
  return (APIUtil.deleteRoute(id)
    .then(route => (dispatch(removeRoute(route.id))))
  )}