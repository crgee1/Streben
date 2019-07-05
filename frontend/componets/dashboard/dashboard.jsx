/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault;
    this.setState(state => ({
      open: !state.open,
    }));
  }

  handleLogout(e) {
    e.preventDefault;
    this.props.logout();
  }

  render() {
    return (
      <div className="dashboard">Dash</div>
    );
  }
}

export default Dashboard;
