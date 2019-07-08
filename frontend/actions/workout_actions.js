import * as APIUtil from '../util/workout_api_util';

export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';

const receiveWorkout = workout => ({
  type: RECEIVE_WORKOUT,
  workout,
})

const receiveWorkouts = workouts => ({
  type: RECEIVE_WORKOUTS,
  workouts,
})

const removeWorkout = workout => ({
  type: REMOVE_WORKOUT,
  workoutId: workout.id
})

const receiveErrors = errors => ({
  type: RECEIVE_WORKOUT_ERRORS,
  errors,
});

export const createWorkout = workout => dispatch => (
  APIUtil.createWorkout(workout)
    .then(workout => (dispatch(receiveWorkout(workout)))),
  err => (dispatch(receiveErrors(err.responseJSON)))
)

export const fetchWorkout = id => dispatch => (
  APIUtil.fetchWorkout(id)
    .then(workout => (dispatch(receiveWorkout(workout)))),
  err => (dispatch(receiveErrors(err.responseJSON)))
)

export const fetchWorkouts = () => dispatch => (
  APIUtil.fetchWorkouts()
    .then(workouts => (dispatch(receiveWorkouts(workouts)))),
  err => (dispatch(receiveErrors(err.responseJSON)))
)

export const updateWorkout = workout => dispatch => (
  APIUtil.updateWorkout(workout)
    .then(workout => (dispatch(receiveWorkout(workout)))),
  err => (dispatch(receiveErrors(err.responseJSON)))
)

export const deleteWorkout = id => dispatch => (
  APIUtil.deleteWorkout(id)
    .then(workout => (dispatch(removeWorkout(workout))))
)