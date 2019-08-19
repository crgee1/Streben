import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { fetchRoutes, deleteRoute, } from '../../actions/route_actions';
import { fetchWorkouts, } from '../../actions/workout_actions';

const mapStatetoProps = state => {
  const { workouts } = state.entities;
  const { id } = state.session.currentUser;
  return ({
  currentUser: state.session.currentUser,
  allRoutes: Object.values(state.entities.routes),
  recentWorkouts: Object.values(workouts).reverse()
    .filter(workout => id === workout.userId)
    .sort((a, b) => b.createDate > a.createDate ? 1 : -1),
})}

const mapDispatchToProps = dispatch => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  deleteRoute: (id) => dispatch(deleteRoute(id)),
  fetchWorkouts: () => dispatch(fetchWorkouts()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(RouteIndex);
