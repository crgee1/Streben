import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.displayTime = this.displayTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  displayTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(seconds % 3600 / 60);
    let sec = seconds % 60;
    if (sec < 10) sec = `0${sec}`;
    if (hour >= 1 && min < 10) min = `0${min}`
    return hour >= 1 ? `${hour}:${min}:${sec}` : `${min}:${sec}`
  }

  handleClick() {
    this.props.history.push(`/routes/edit/${this.props.route.id}`)
  }

  render() {
    const { route } = this.props;
    return (
      <div className='route-index-item'>
        <img className='map-image' src={`${route.url}`}/>
        <i className="fas fa-wrench" onClick={this.handleClick}></i>
        <section className='route-index-item-stats'>
          <ul className='route-index-list'>
            <div className='map-name'>
              <a href="">{route.name}</a>
            </div>
            <div className='inline-list'>
              <section>
                <h2>{route.distance}<abbr> mi</abbr></h2> 
                <label>Distance</label>
              </section>
              <section>
                <h2>{route.elevation}<abbr> ft</abbr></h2> 
                <label>Elevation</label>
              </section>
            </div>
            <label>Est Moving Time    </label>
            {this.displayTime(route.duration)}
          </ul>
        </section>
      </div>
    )
  }
} 

export default withRouter(RouteIndexItem)