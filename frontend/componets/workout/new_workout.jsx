import React from 'react';

class NewWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      distance: 0,
      // duration: 0,
      elevation: 0,
      name: '',
      workout_type: 'Run',
      // hours: 0,
      // minutes: 0,
      // seconds: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateDuration = this.updateDuration.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state)
    // ((this.state.hours * 3600) || 0) + ((this.state.minutes * 60) || 0) + (this.state.seconds * 1 || 0)
    // .then((res) => console.log(res));
    // .then((res) => this.setState({ duration: res }));
    
    if (this.state.name === '') {
     document.getElementById('name-err').innerHTML = 'Name cant be blank';
    } else {
    this.props.createWorkout(this.state).then(res => this.props.history.push(`/training/${res.payload.workouts.id}`));
    }
  }

  

  update(field) {
    return (e) => {
      e.preventDefault();
      // debugger;
      // const num = (parseInt(this.state.hours) * 3600) + (parseInt(this.state.minutes) * 60) + parseInt(this.state.seconds);
      // this.setState({ duration: num })
      this.setState({ [field]: e.target.value }, () => {
        let result = parseInt(this.state.hours * 3600 || 0) + parseInt(this.state.minutes * 60 || 0) + parseInt(this.state.seconds || 0);
        this.setState({ duration: result })
      })
    };
  }

  updateDuration(hr, min, sec) {
    return hr + min + sec
  }

  renderErrors() {
    return (
      <section className="workout-errors">
        {this.props.errors.map((error, i) => (
          <ul>
            <li key={`error-${i}`}>
              {error}
            </li>
          </ul>
        ))}
      </section>
    );
  }

  render() {
    return (
      <div className='new-workout'>
        <form className='new-workout-form' onSubmit={this.handleSubmit}>
          <header>
            <h1>Manual Entry</h1>
          </header>
          <section className='form-sec'>
            <div>
              <label>Distance</label>
              <input className='distance-workout-form' type="text" value={this.state.distance} onChange={this.update('distance')}/>
            </div>
            <div>
              <label>Duration</label>
              <section className='duration'>
                <input type="number" value={this.state.hours} onChange={this.update('hours')}/>
                <input type="number" value={this.state.minutes} onChange={this.update('minutes')}/>
                <input type="number" value={this.state.seconds} onChange={this.update('seconds')}/>
              </section>
            </div>
            <div>
              <label>Elevation</label>
              <input className='elevation-workout-form' type="text" value={this.state.elevation} onChange={this.update('elevation')}/>
            </div>
          </section>
          <hr/>
          <section className='form-sec'>
            <div>
              <label>Sport</label>
              <select className='sport-workout-form' defaultValue={'Run'} onChange={this.update('workout_type')}>
                <option value='Run'>Run</option>
                <option value='Ride'>Ride</option>
                <option value='Hike'>Hike</option>
                <option value='Walk'>Walk</option>
              </select>
            </div>
            {/* <div>
              <label>Date & Time</label>
              <input className='date-workout-form' type="text" />
            </div> */}
          </section>
          <section className='form-sec'>
            <div>
              <label>Title</label>
              <input className='title-workout-form' type="text" value={this.state.name} onChange={this.update('name')}/>
              <label id='name-err'></label>
            </div>
          </section>
          <hr/>
          <section className='form-sec'>
            <div>
              <label>Description</label>
              <textarea className='description-workout-form' value={this.state.description} onChange={this.update('description')}></textarea>
            </div>
          </section>
          <hr/>
          <section className='form-sec'>
            <div>
              <button>Create</button>
            </div>
          </section>
        </form>
      </div>
    )
  }
}

export default NewWorkout;
