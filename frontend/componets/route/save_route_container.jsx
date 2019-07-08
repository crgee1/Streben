import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import SaveRoute from './save_route';
import { createRoute } from '../../actions/route_actions';
import { createLocation } from '../../actions/location_actions';

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    createLocation: location => dispatch(createLocation(location)),
    createRoute: route => dispatch(createRoute(route)),
  };
};

export default connect(null, mapDispatchToProps)(SaveRoute);