import { connect } from 'react-redux';
import ShowWorkout from './show_workout';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStatetoProps = (state, ownProps) => {
  let workout = state.entities.workouts[ownProps.match.params.workoutId];
  const currentUser = state.session.currentUser;
  const likes = Object.values(state.entities.likes);
  const { id } = state.session.currentUser;
  let user;
  if (workout === undefined) {
    workout = {id: 0}
    user = { username: ''};
  } else {
    user = state.entities.users[workout.userId]
  }
  return ({
    id,
    currentUser,
    user,
    workout,
    likes,
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
