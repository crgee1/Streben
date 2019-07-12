# Streben

[Streben](https://streben.herokuapp.com/#/) is a website for outdoor activities like running. It is based on Strava's website. It has the capability of being able track manually entered stats related to your activities. As well as generate a route between two points on a map and relay pertinent information, like distance and elevation.

The project uses a rails backend with a PostgreSQL database with React-Redux as the frontend and was made in 10 days, with plans to expand its features in the future. 

* User authentication using BCrypt
* Track manually entered data related to outdoor activities
* Display accumulated data for the user
* Create routes on a map and provide related data

The main APIs used are from Google Maps API, such as Directions API, Maps JavaScript API, and Maps Elevation API. When using the Google Maps API, the developer guides and overviews were very helpful, but still required some testing to see what met my requirements.

![Test Image 1](https://github.com/crgee1/Streben/blob/master/app/assets/images/Screen%20Shot%202019-07-12%20at%2010.35.09%20AM.png)

![New Route](https://github.com/crgee1/Streben/blob/master/app/assets/images/new_route.png)

![New Route Show](https://github.com/crgee1/Streben/blob/master/app/assets/images/new_route_show.png)
