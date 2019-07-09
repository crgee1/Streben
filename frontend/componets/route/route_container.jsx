import { connect } from 'react-redux';
import Route from './route';
import { fetchRoutes } from '../../actions/route_actions';

const mapStatetoProps = state => ({
  currentUser: state.session.currentUser,
  allRoutes: Object.values(state.entities.routes).filter(route => route.user_id === currentUser.id),
})

const mapDispatchToProps = dispatch => ({
  fetchRoutes: () => dispatch(fetchRoutes()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(Route)