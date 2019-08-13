import { connect } from 'react-redux';
import IndexWorkout from './index_workout';
import { fetchWorkouts, deleteWorkout } from '../../actions/workout_actions';

const mapStateToProps = state => {
  const { workouts } = state.entities;
  const { id } = state.session.currentUser;
  return {
    workouts: Object.values(workouts).reverse()
      .filter(workout => id === workout.user_id)
      .sort((a, b) => b.create_date > a.create_date ? 1 : -1),
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWorkouts: () => dispatch(fetchWorkouts()),
  deleteWorkout: id => dispatch(deleteWorkout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexWorkout);