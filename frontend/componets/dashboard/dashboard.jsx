import React from 'react';
import ActivityFeedItem from './activity_feed_item';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  render() {
    const { currentUser } = this.props;
    const workouts = this.props.workouts
      .filter(workout => workout.user_id === currentUser.id)
        .map((workout, i) => (
          <ActivityFeedItem
            workout={workout}
            key={i}
          />
        ))
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
                {currentUser.username}
              </h1>
            </section>
          </section>
        </div>
        <div className='activity-feed'>
          <section className='banner'></section>
          {workouts}
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
