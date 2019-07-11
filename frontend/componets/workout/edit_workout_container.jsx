import { connect } from 'react-redux';
import EditWorkout from './edit_workout';
import { updateWorkout } from '../../actions/workout_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  workout: state.entities.workouts[ownProps.match.params.workoutId],
  errors: state.errors.workouts,
})

const mapDispatchToProps = dispatch => ({
  updateWorkout: workout => dispatch(updateWorkout(workout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWorkout);