import { connect } from 'react-redux';
import ShowWorkout from './show_workout';
import { fetchWorkout, deleteWorkout } from '../../actions/workout_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStatetoProps = (state, ownProps) => {
  const workout = state.entities.workouts[ownProps.match.params.workoutId]
  let user;
  if (workout === undefined) {
    user = { username: ''};
  } else {
    user = state.entities.users[workout.user_id]
  }
  return ({
    user,
    workout  
  })
}

const mapDispatchToProps = dispatch => ({
  fetchWorkout: id => dispatch(fetchWorkout(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  deleteWorkout: id => dispatch(deleteWorkout(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowWorkout)
