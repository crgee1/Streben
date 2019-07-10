import { connect } from 'react-redux';
import ShowWorkout from './show_workout';
import { fetchWorkout } from '../../actions/workout_actions';

const mapStatetoProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    workout: state.entities.workouts[ownProps.match.params.routeId],
  })
}

const mapDispatchToProps = dispatch => ({
  fetchWorkout: id => dispatch(fetchWorkout(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowWorkout)
