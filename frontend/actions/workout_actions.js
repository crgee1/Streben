import * as APIUtil from '../util/workout_api_util';

export const START_LOADING_MANY = 'START_LOADING_MANY';
export const START_LOADING_ONE = 'START_LOADING_ONE';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';

const receiveWorkout = payload => ({
  type: RECEIVE_WORKOUT,
  payload,
})

const receiveWorkouts = payload => ({
  type: RECEIVE_WORKOUTS,
  payload,
})

const removeWorkout = workout => {
  return {
  type: REMOVE_WORKOUT,
  workoutId: workout.id
}}

const receiveErrors = errors => ({
  type: RECEIVE_WORKOUT_ERRORS,
  errors,
});

const startLoadingMany = () => ({
  type: START_LOADING_MANY
});

const startLoadingOne = () => ({
  type: START_LOADING_ONE
});

export const createWorkout = workout => dispatch => (
  APIUtil.createWorkout(workout)
    .then(workout => dispatch(receiveWorkout(workout)),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const fetchWorkout = id => dispatch => {
  dispatch(startLoadingOne());
  return APIUtil.fetchWorkout(id)
    .then(workout => dispatch(receiveWorkout(workout)),
  err => dispatch(receiveErrors(err.responseJSON)))
}

export const fetchWorkouts = () => dispatch => {
  dispatch(startLoadingMany());
  return APIUtil.fetchWorkouts()
    .then(workouts => dispatch(receiveWorkouts(workouts)),
  err => dispatch(receiveErrors(err.responseJSON)))
}

export const updateWorkout = workout => dispatch => (
  APIUtil.updateWorkout(workout)
    .then(workout => dispatch(receiveWorkout(workout)),
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteWorkout = id => dispatch => {
  return (
  APIUtil.deleteWorkout(id)
    .then(workout => dispatch(removeWorkout(workout)))
  )}