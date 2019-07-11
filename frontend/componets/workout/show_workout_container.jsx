import { connect } from 'react-redux';
import ShowWorkout from './show_workout';
import { fetchWorkout } from '../../actions/workout_actions';
import { fetchUser } from '../../actions/session_actions';

const mapStatetoProps = (state, ownProps) => {
  return ({
    workout: state.entities.workouts[ownProps.match.params.workoutId]
  })
}

const mapDispatchToProps = dispatch => ({
  fetchWorkout: id => dispatch(fetchWorkout(id)),
  fetchUser: id => dispatch(fetchUser(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowWorkout)
