import React from 'react';

class ShowWorkout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.workoutId)
      .then(res => this.props.fetchUser(res.workout.user_id));
  }

  render() {
    const {workout} = this.props;
    const display = this.props.workout === undefined ? null : (<div>
      <div className='icons'></div>
      <div className='show-workout-display'>
        <header><h1>{workout.user.username} - {workout.workout_type}</h1></header>
        <div className='show-workout-info'>
          <section className='show-workout-left'>
            <section className='avatar-image'>
              <h1>
                {workout.user.username[0]}
              </h1>
            </section>
            <h2>{workout.name}</h2>
          </section>
          <section className='show-workout-right'></section>
        </div>
      </div>
    </div>);
    console.log(this.props.users)
    return (
      <div className='show-workout-main'>
        <h1>Activites</h1>
      {display}
    </div>
    )
  }
}
// { this.props.users[this.props.workout.user_id].username }
export default ShowWorkout;