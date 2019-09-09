# Streben

[Streben](https://streben.herokuapp.com/#/) 
 is a website for outdoor activities like running and biking. It is a clone of Strava's website. It has the capability of being able to track manually entered activities and display accumulated stats related to your activities; as well as generate a route between two points on a map and relay pertinent information, like distance and elevation.

The project was done in 10 days, with future plans to develop it further.

## Technologies

This project uses a Ruby on Rails backend with a PostgreSQL database with JavaScript React-Redux as the frontend.

The main APIs used are from Google Maps API, such as Directions API, Maps JavaScript API, and Maps Elevation API. When using the Google Maps API, the developer guides and overviews were very helpful, but still required some testing to see what met my requirements.

## Features

* User authentication using BCrypt
* Activity feed
* Track manually entered data related to outdoor activities
* Display accumulated data for the user
* Create routes on a map and provide related data
* Index of all personal workouts with sortable headers

### Activity Feed

![Activity Feed](https://github.com/crgee1/Streben/blob/master/app/assets/images/Screen%20Shot%202019-07-12%20at%2010.35.09%20AM.png)

The user's mainpage will pull their inputted activities and display it. On the left hand side, it will total your stats from all your inputted data.

### Routes

![New Route](https://github.com/crgee1/Streben/blob/master/app/assets/images/new_route.png)

The user can drop pins down on a map and generate a route between multiple points and save it for future displaying.

### Route Builder Toolbar

![gif](https://media.giphy.com/media/jS8g6341sRBtom2JMk/giphy.gif)

The undo, redo, and clear buttons are all custom operations, not native to the Google Maps API. It allows for the ability to undo any dropped pins, as well as keep track of the undone pins to allow for redoing. As well as get rid of every pin altogether.

``` javascript
 handleRedo() {
    if (this.prevMarkers.length === 0) return;
    const last = this.prevMarkers[this.prevMarkers.length - 1];
    if (last.action === 'undo') {
      if (last.markers instanceof Array) {
        this.handleClear();
        this.prevMarkers.pop();
      } else {
        this.placeMarker(last.markers.position);
        this.prevMarkers.pop();
      }
    }
  }

  handleUndo() {
    let last = this.markersArr[this.markersArr.length - 1];
    if (!last) return;
    if (this.markersArr.length === 1) {
        this.markersArr.pop().setMap(null);
      } else if (this.markersArr.length === 2) {
        last = this.markersArr[0];
        let first = this.markersArr[1];
        this.clearStats()
        this.placeMarker(last.position);
        last = first;
      } else if (this.markersArr.length > 2) {
        this.markersArr.pop().setMap(null);
        this.drawRoute();
      }
      this.prevMarkers.push({action: 'undo', markers: last});
  }

  handleClear() {
    if (this.markersArr.length === 0) return;
    this.prevMarkers = [];
    this.clearStats();
  }

  clearStats() {
    this.markersArr.pop().setMap(null);
    this.directionsRender.set('directions', null);
    this.markersArr = [];
    document.getElementById('duration').innerHTML = '';
    document.getElementById('distance').innerHTML = '';
    document.getElementById('elevation').innerHTML = '';
    this.setState({ save: false });
  }
```

### Activities Page

![gif2](https://media.giphy.com/media/Y0yjMhq6uNOMIG87ri/giphy.gif)

The activities page is a index of all of a user's activities they added. The headers are clickable and allow quick sorting for the given category. Two sorting functions were needed to handle alpha characters and numeric data slightly differently.

``` javascript

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

```

## Project Design

This project was made with cloning Strava's key features in mind, but in 10 days. Managing expectations to match the givin timeline was crucial in order to have a final project to demo.

## Future Changes

* Comment on activitiy feed items
* Like other people's activities
* Undo clears on the route builder
