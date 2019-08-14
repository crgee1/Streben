import { connect } from 'react-redux';
import EditWorkout from './edit_workout';
import { updateWorkout, fetchWorkout, fetchWorkouts } from '../../actions/workout_actions'

const mapStateToProps = (state, ownProps) => {
  const { id } = state.session.currentUser;
  let preworkout = state.entities.workouts[ownProps.match.params.workoutId]
  if (preworkout === undefined) {
    preworkout = {
      userId: 0,
      name: '',
      distance: 0,
      duration: 0,
      elevation: 0,
      workoutType: 'Run',
      description: '',
    }
  }
  return {
    currentUser: state.session.currentUser,
    preworkout,
    errors: state.errors.workouts,
    recentWorkouts: Object.values(state.entities.workouts).reverse()
      .filter(el => id === el.userId)
      .sort((a, b) => b.createDate > a.createDate ? 1 : -1),
}}

const mapDispatchToProps = dispatch => ({
  updateWorkout: workout => dispatch(updateWorkout(workout)),
  fetchWorkout: id => dispatch(fetchWorkout(id)),
  fetchWorkouts: () => dispatch(fetchWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);