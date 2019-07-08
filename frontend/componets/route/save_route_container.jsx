import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import SaveRoute from './save_route';

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mapDispatchToProps)(SaveRoute);