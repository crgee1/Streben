import * as APIUtil from '../util/route_api_util';

export const START_LOADING_MANY = 'START_LOADING_MANY';
export const START_LOADING_ONE = 'START_LOADING_ONE';
export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';
export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
export const REMOVE_ROUTE = 'REMOVE_ROUTE';
export const RECEIVE_ROUTE_ERRORS = 'RECEIVE_ROUTE_ERRORS';

const receiveRoute = payload => ({
  type: RECEIVE_ROUTE,
  payload,
})

const receiveRoutes = payload => ({
  type: RECEIVE_ROUTES,
  payload,
})

const removeRoute = routeId => ({
  type: REMOVE_ROUTE,
  routeId
})

const receiveErrors = errors => ({
  type: RECEIVE_ROUTE_ERRORS,
  errors,
});

const startLoadingMany = () => ({
  type: START_LOADING_MANY
});

const startLoadingOne = () => ({
  type: START_LOADING_ONE
});

export const createRoute = route => dispatch => {
  return(
  APIUtil.createRoute(route)
    .then(route => dispatch(receiveRoute(route)),
  err => dispatch(receiveErrors(err.responseJSON)))
  )}

export const fetchRoute = id => dispatch => {
  dispatch(startLoadingOne());
  return APIUtil.fetchRoute(id)
  .then(route => dispatch(receiveRoute(route)),
  err => dispatch(receiveErrors(err.responseJSON)));
}

export const fetchRoutes = () => dispatch => {
  dispatch(startLoadingMany());
  return APIUtil.fetchRoutes()
    .then(routes => dispatch(receiveRoutes(routes)),
  err => dispatch(receiveErrors(err.responseJSON)));
}

export const updateRoute = route => dispatch => (
  APIUtil.updateRoute(route)
    .then(route => dispatch(receiveRoute(route)),
      err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteRoute = id => dispatch => {
  return (APIUtil.deleteRoute(id)
    .then(route => dispatch(removeRoute(route.id)))
  )}
  