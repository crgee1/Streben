# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Streben

[Streben](https://streben.herokuapp.com/#/) is a website for outdoor activities like running. It is based on Strava's website. It has the capability of being able track manually entered stats related to your activities. As well as generate a route between two points on a map and relay pertinent information, like distance and elevation.

The project uses a rails backend with a PostgreSQL database with React-Redux as the frontend and was made in 10 days, with plans to expand its features in the future. 

* User authentication using BCrypt
* Track manually entered data related to outdoor activities
* Display accumulated data for the user
* Create routes on a map and provide related data

The main APIs used are from Google Maps API, such as Directions API, Maps JavaScript API, and Maps Elevation API. When using the Google Maps API, the developer guides and overviews were very helpful, but still required some testing to see what met my requirements.
