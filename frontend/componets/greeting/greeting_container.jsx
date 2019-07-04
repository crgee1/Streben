import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions'

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Greeting)
