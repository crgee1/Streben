import { connect } from 'react-redux';
import EditWorkout from './edit_workout';
import { updateWorkout, fetchWorkout } from '../../actions/workout_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  workout: state.entities.workouts[ownProps.match.params.workoutId],
  errors: state.errors.workouts,
})

const mapDispatchToProps = dispatch => ({
  updateWorkout: workout => dispatch(updateWorkout(workout)),
  fetchWorkout: id => dispatch(fetchWorkout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);