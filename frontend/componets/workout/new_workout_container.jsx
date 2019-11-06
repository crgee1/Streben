import { connect } from 'react-redux';
import NewWorkout from './new_workout';
import { createWorkout, fetchWorkouts } from '../../actions/workout_actions'

const mapStateToProps = state => {
  const { id } = state.session.currentUser;
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.workouts,
    recentWorkouts: Object.values(state.entities.workouts).reverse()
      .filter(el => id === el.userId)
      .sort((a, b) => b.createDate > a.createDate ? 1 : -1),
  }
}

const mapDispatchToProps = dispatch => ({
  createWorkout: workout => dispatch(createWorkout(workout)),
  fetchWorkouts: () => dispatch(fetchWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout);
