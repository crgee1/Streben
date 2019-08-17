import { connect } from 'react-redux';
import RouteIndex from './route_index';
import { fetchRoutes, deleteRoute } from '../../actions/route_actions';

const mapStatetoProps = state => {
  return ({
  currentUser: state.session.currentUser,
  allRoutes: Object.values(state.entities.routes),
})}

const mapDispatchToProps = dispatch => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  deleteRoute: (id) => dispatch(deleteRoute(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(RouteIndex);
