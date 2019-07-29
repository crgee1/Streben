import React from 'react';
import IndexWorkoutItem from './index_workout_item';

class Training extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  render() {
    const { workouts } = this.props;
    const workoutList = workouts.map((workout, i) => (
      <IndexWorkoutItem
        workout={workout}
        key={i}
      />
    ))
    return (
      <div className='training-main'>
        <header className='training-head'>
          <h1>My Activities</h1>
        </header>
        <section className='activity-count'>
          {workouts.length}
        </section>
        <table>
          <thead>
            <tr>
              <th>Sport</th>
              <th>Date</th>
              <th>Title</th>
              <th>Time</th>
              <th>Distance</th>
              <th>Elevation</th>
            </tr>
          </thead>
          <tbody>
            {workoutList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Training;