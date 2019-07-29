import React from 'react';
import IndexWorkoutItem from './index_workout_item';

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {workouts: this.props.workouts}

    this.onSort = this.onSort.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts().then(() => this.setState({
      workouts: this.props.workouts
    }));
  }

  onSort(sortKey) {
    const workouts = this.state.workouts;
    workouts.sort((a, b) => a[sortKey] - b[sortKey]);
    this.setState({ workouts });
  }

  render() {
    const { workouts, deleteWorkout } = this.props;
    const workoutList = workouts.map((workout, i) => (
      <IndexWorkoutItem
        workout={workout}
        deleteWorkout={deleteWorkout}
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
                <th onClick={e => this.onSort('name')}>Title</th>
                <th onClick={e => this.onSort('duration')}>Time</th>
                <th onClick={e => this.onSort('distance')}>Distance</th>
                <th onClick={e => this.onSort('elevation')}>Elevation</th>
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