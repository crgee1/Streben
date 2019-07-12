import { connect } from 'react-redux';
import EditWorkout from './edit_workout';
import { updateWorkout, fetchWorkout } from '../../actions/workout_actions'

const mapStateToProps = (state, ownProps) => {
  let preworkout = state.entities.workouts[ownProps.match.params.workoutId]
  if (preworkout === undefined) {
    preworkout = {
      user_id: 0,
      name: '',
      distance: 0,
      duration: 0,
      elevation: 0,
      workout_type: 'Run',
      description: '',
    }
  }
  return {
    currentUser: state.session.currentUser,
    preworkout,
    errors: state.errors.workouts,
}}

const mapDispatchToProps = dispatch => ({
  updateWorkout: workout => dispatch(updateWorkout(workout)),
  fetchWorkout: id => dispatch(fetchWorkout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);