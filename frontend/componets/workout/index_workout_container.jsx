import { connect } from 'react-redux';
import IndexWorkout from './index_workout';
import { fetchWorkouts } from '../../actions/workout_actions';

const mapStateToProps = state => {
  return {
    workouts: state.entities.workouts
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: () => dispatch(fetchWorkouts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexWorkout);