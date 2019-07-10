import React from 'react';
import { Link } from 'react-router-dom';

class ShowRoute extends React.Component {
  constructor(props) {
    super(props);
    this.route = this.props.route
    this.displayTime = this.displayTime.bind(this);
  }

  componentWillMount() {
    this.props.fetchRoute(this.props.match.params.routeId)
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  render() {
    const { route, currentUser } = this.props;
    
    const display = this.props.route === undefined ? null : (<div className='show-route'>
      <div className='show-route-header'>
        <header>{route.name}</header>
        <Link to={`/routes/edit/${route.id}`} className='edit-btn'>Edit</Link>
      </div>
      <div className='show-route-main'>
        <section className='minimap'><img src={`${route.url}`}/></section>
        <section className='show-route-stats'>
          
          <div className='name-section'>
            <section className='avatar-image'>
              <h1>
                {this.props.currentUser.username[0]}
              </h1>
            </section>
            <section class='show-username'>
              By {currentUser.username}
            </section>
          </div>
          <hr className='hr'/>
          <div className='stats-one'>
            <section>
              <h2>{route.distance}mi</h2>
              <h3>Distance</h3>
            </section>
            <section>
              <h2>{route.elevation}ft</h2>
              <h3>Elevation Gain</h3>
            </section>
            <section>
              <h2>Road</h2>
              <h3>Run Type</h3>
            </section>
          </div>
          <div className='stats-two'>
            <h3>Est. Moving Time</h3>
            <h2>{this.displayTime(route.duration)}</h2>
          </div>
          <hr/>
          <div className='show-route-description'>
            <p>{route.description}</p>
          </div>
          <hr />
        </section>
      </div>
    </div>);

    return (
      <div>
        {display}
      </div>
    )
  }
}

export default ShowRoute