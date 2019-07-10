import { connect } from 'react-redux';
import ShowRoute from './show_route';
import { fetchRoute } from '../../actions/route_actions';

const mapStatetoProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    route: state.entities.routes[ownProps.match.params.routeId]
  })
}

const mapDispatchToProps = dispatch => ({
  fetchRoute: id => dispatch(fetchRoute(id)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ShowRoute)
