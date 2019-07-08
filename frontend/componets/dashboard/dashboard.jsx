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
      <div className="dashboard-home">
        <div className='personal-stats'>
          <section className='profile-card'>
            <section className='avatar-image'>
              <h1>
                  {this.props.currentUser.username[0]}
              </h1>
            </section>
            <section className='profile-main-text'>
              <h1>
                {this.props.currentUser.username}
              </h1>
            </section>
          </section>
        </div>
        <div className='activity-feed'>
          <section className='banner'></section>
        </div>
        <div className='advertise'>
          <section>
            <a href="https://www.linkedin.com/in/christopher-gee-426527118" className='personal-adver'>Linkedin</a>
          </section>
          <section>
            <a href="https://github.com/crgee1" className='personal-adver'>GitHub</a>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
