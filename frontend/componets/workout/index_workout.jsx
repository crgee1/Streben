import React from 'react';
import IndexWorkoutItem from './index_workout_item';

class Training extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.workouts !== this.props.workouts) {
      console.log(prevProps.workouts)
      console.log(this.props.workouts)
    };
  }

  render() {
    const { workouts } = this.props;
    const workoutList = workouts.map((workout, i) => (
      <IndexWorkoutItem
        workout={workout}
        key={i}
        id={i}
      />
    ))
    return (
      <div className='training-main'>
        <div>
          <header className='training-head'>
            <h1>My Activities</h1>
          </header>
          <section className='activity-count'>
            {workouts.length} Activities
          </section>
          <table>
            <thead>
              <tr>
                <th className='sport-header'>Sport</th>
                <th>Title</th>
                <th>Time</th>
                <th>Distance</th>
                <th>Elevation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workoutList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Training;