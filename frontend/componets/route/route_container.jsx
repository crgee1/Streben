import { connect } from 'react-redux';
import Route from './route';
import { fetchRoutes, deleteRoute } from '../../actions/route_actions';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser,
  allRoutes: Object.values(state.entities.routes).filter(route => route.user_id === currentUser.id),
})

const mapDispatchToProps = dispatch => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
  deleteRoute: (id) => dispatch(deleteRoute(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(Route)