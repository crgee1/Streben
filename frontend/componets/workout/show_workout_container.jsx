import { connect } from 'react-redux';
import ShowWorkout from './show_workout';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStatetoProps = (state, ownProps) => {
  const workout = state.entities.workouts[ownProps.match.params.workoutId];
  const { id } = state.session.currentUser;
  let user;
  if (workout === undefined) {
    user = { username: ''};
  } else {
    user = state.entities.users[workout.userId]
  }
  return ({
    user,
    workout,
    recentWorkouts: Object.values(state.entities.workouts).reverse()
      .filter(el => id === el.userId && el.id !== workout.id)
      .sort((a, b) => b.createDate > a.createDate ? 1 : -1),
  })
}

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: () => dispatch(fetchWorkouts()),
  fetchUser: id => dispatch(fetchUser(id)),
  deleteWorkout: id => dispatch(deleteWorkout(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowWorkout)
