import { connect } from 'react-redux';
import NewWorkout from './new_workout';
import { createWorkout } from '../../actions/workout_actions'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.workouts,
})

const mapDispatchToProps = dispatch => ({
  createWorkout: workout => dispatch(createWorkout(workout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewWorkout);