import React from 'react';

class RouteIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.displayTime = this.displayTime.bind(this);
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
    const { route } = this.props;
    console.log(this.props)
    return (
      <div className='route-index-item'>
        <img className='map-image' src={`${route.url}`}/>
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

export default RouteIndexItem