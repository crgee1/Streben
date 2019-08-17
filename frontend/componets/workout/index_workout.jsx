import React from 'react';
import IndexWorkoutItem from './index_workout_item';

class Training extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: this.props.workouts,
      workoutType: true,
      name: true,
      distance: true,
      elevation: true,
      duration: true,
      createDate: true,
    }

    this.sortNum = this.sortNum.bind(this);
    this.sortAlpha = this.sortAlpha.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkouts().then(() => this.setState({
      workouts: this.props.workouts
    }));
  }

  sortAlpha(sortKey) {
    const workouts = this.state.workouts;
    if (this.state[sortKey]) {
      workouts.sort((a, b) => a[sortKey] > b[sortKey] ? 1 : -1);
    } else {
      workouts.sort((a, b) => b[sortKey] > a[sortKey] ? 1 : -1);
    }
    this.setState({[sortKey]: !this.state[sortKey]})
  }

  sortNum(sortKey) {
    const workouts = this.state.workouts;
    if (this.state[sortKey]) {
      workouts.sort((a, b) => a[sortKey] - b[sortKey]);
    } else {
      workouts.sort((a, b) => b[sortKey] - a[sortKey]);
    }
    this.setState({ [sortKey]: !this.state[sortKey] })
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
    ));
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
                <th className='sport-header' onClick={e => this.sortAlpha('workoutType')}>Sport</th>
                <th className='sport-date' onClick={e => this.sortAlpha('createDate')}>Date</th>
                <th className='title-header' onClick={e => this.sortAlpha('name')}>Title</th>
                <th onClick={e => this.sortNum('duration')}>Time</th>
                <th onClick={e => this.sortNum('distance')}>Distance</th>
                <th onClick={e => this.sortNum('elevation')}>Elevation</th>
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