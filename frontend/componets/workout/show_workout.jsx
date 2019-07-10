import React from 'react';

class ShowWorkout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWorkout(this.props.match.params.workoutId)
  }

  render() {

    return (
      <div className='show-workout-main'>
        <div className='icons'></div>
        <div className='show-workout-display'>
          <header><h1></h1></header>
          <div className='show-workout-info'>
            <section className='show-workout-left'></section>
            <section className='show-workout-right'></section>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowWorkout;