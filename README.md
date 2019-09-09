# Streben

[Streben](https://streben.herokuapp.com/#/) is a website for outdoor activities like running. It is a clone of Strava's website. It has the capability of being able to track manually entered activities and display accumulated stats related to your activities; as well as generate a route between two points on a map and relay pertinent information, like distance and elevation.

The project was done in 10 days, with future plans to develop it further.

## Technologies

This project uses a rails backend with a PostgreSQL database with React-Redux as the frontend.

The main APIs used are from Google Maps API, such as Directions API, Maps JavaScript API, and Maps Elevation API. When using the Google Maps API, the developer guides and overviews were very helpful, but still required some testing to see what met my requirements.

## Features

* User authentication using BCrypt
* Activity feed
* Track manually entered data related to outdoor activities
* Display accumulated data for the user
* Create routes on a map and provide related data

### Activity Feed

![Activity Feed](https://github.com/crgee1/Streben/blob/master/app/assets/images/Screen%20Shot%202019-07-12%20at%2010.35.09%20AM.png)

The user's mainpage will pull their inputted activities and display it. On the left hand side, it will total your stats from all your inputted data.

### Routes

![New Route](https://github.com/crgee1/Streben/blob/master/app/assets/images/new_route.png)

The user can drop pins down on a map and generate a route between multiple points and save it for future displaying.

## Project Design

This project was made with cloning Strava's key features in mind, but in 10 days. Managing expectations to match the givin timeline was crucial in order to have a final project to demo.

## Future Changes

* Comment on activitiy feed items
* Like other people's activities
