import React from 'react';
import { Link } from 'react-router-dom';
import SmallMap from './show_map';
import LoadingIcon from '../loading/loading_icon';

class ShowRoute extends React.Component {
  constructor(props) {
    super(props);
    this.route = this.props.route;
    this.displayTime = this.displayTime.bind(this);
    this.displayDate = this.displayDate.bind(this);
    this.state = {locations: this.props.locations};
  }

  componentDidMount() {
    this.props.fetchRoute(this.props.match.params.routeId);
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locations !== this.props.locations) {
      this.setState({locations: this.props.locations});
    }
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  displayDate(date) {
    const mth = {
      '01': 'January',
      '02': 'Febuary',
      '03': 'March',
      '04': 'April',
      '05': 'May',
      '06': 'June',
      '07': 'July',
      '08': 'August',
      '09': 'September',
      '10': 'October',
      '11': 'November',
      '12': 'December',
    };
    return `${mth[date.slice(5,7)]} ${date.slice(8,10)}, ${date.slice(0,4)}`;
  }
  
  profilePic() {
    const { user } = this.props;

    return user.photoUrl ? <img className="avatar-image" src={user.photoUrl} /> :
      <section className="avatar-image blank">
        <h1 className="blank-pic">{user.username[0].toUpperCase()}</h1>
      </section>
  }

  render() {
    const { route, currentUser, locations, loading } = this.props;
    let display = this.props.route === undefined ? null : (<div className='show-route-content'>
      <div className='show-route-header'>
        <header>{route.name}</header>
        <Link to={`/routes/edit/${route.id}`} className='edit-btn'>Edit</Link>
      </div>
      <div className='show-route-main'>
        <section className='minimap'><SmallMap route={route} locations={Object.values(locations)}/></section>
        <section className='show-route-stats'>
          <div className='name-section'>
            {this.profilePic()}
            <section className='show-username'>
              By {currentUser.username}
              <h3>Created on {this.displayDate(route.createdAt)}</h3>
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

    if (loading) display = <div className='show-route-content'><LoadingIcon /></div>

    return (
      <div className='show-route'>
        {display}
      </div>
    )
  }
}

export default ShowRoute
