# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  User.destroy_all
  user1 = User.create(username: 'DemoUser', password: 'password')
  user2 = User.create(username: 'Sonic', password: 'password')
  user3 = User.create(username: 'Kallmeehkev', password: 'password')
  user4 = User.create(username: 'JimboJams', password: 'password')
  user5 = User.create(username: 'SoapyRedPanda', password: 'password')
  user1.photo.attach(io: open('https://streben-dev.s3-us-west-1.amazonaws.com/nishikori'), filename: 'nishikori.jpg')
  user2.photo.attach(io: open('https://streben-dev.s3-us-west-1.amazonaws.com/sonic'), filename: 'sonic.jpg')
  user3.photo.attach(io: open('https://streben-dev.s3.us-west-1.amazonaws.com/crab'), filename: 'crab.jpg')
  user4.photo.attach(io: open('https://streben-dev.s3-us-west-1.amazonaws.com/jimbo'), filename: 'jimbo.jpg')
  user5.photo.attach(io: open('https://streben-dev.s3-us-west-1.amazonaws.com/panda'), filename: 'panda.jpg')

  Route.destroy_all
  route1 = Route.create(user_id: user1.id, distance: 0.92, duration: 747, elevation: 63, name: 'First Run', description: 'First route of the season', url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko")
  route2 = Route.create(user_id: user1.id, distance: 3.0, duration: 2437, elevation: 169, name: 'Run Along The Beach', description: '3 mile beach run', url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.6593,-122.49220000000001&markers=label:E%7C37.61894,-122.49260000000001&path=color:0x0000ff80|weight:2|enc:sizdFfgsjVvFs@rCUf@@zBPlAFbAA`@E|@S`@Ov@c@`CqA~@_@lAYdAKv@A~@N`@DbAEp@ILDr@Id@?d@ATCbIjAtARhAPnE|@p@LtB\\HFr@VZLFLv@t@n@d@TLLATFh@BdAAvFO~DGvQYtDG|AEtBMbCQ~AGvFU|BGnBFhAF`AH~@Vn@XPL`@Nf@Dh@ArKATCJFBHEb@?hB?hAAFFRDVJL\\F`Fd@|A@`EZnDFpJ\\zCXfAPpE^^Hd@Pl@\\b@H`@@nASVQ\\ARQ\\]^]JEV]FWVe@Po@Xc@JIRIb@MPORWL[ToBA[EQ&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko")
  route3 = Route.create(user_id: user1.id, distance: 1.78, duration: 1446, elevation: 4, name: 'Embarcadero', description: 'Run along the Embarcadero', url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80693,-122.40583000000001&markers=label:E%7C37.77995000000001,-122.38933000000002&path=color:0x0000ff80|weight:2|enc:idweFlkbjVtBkFl@aAxG}JtAkBzAwArF_FzF_FzCiCvJoIhIkHvDmDhHsGVW|@aApAoAbBoBhDoEr@_ANA`@Eh@GXKTQV]Nc@Fe@@y@AIVOtFcCVQ^]RS\\Uh@U`@KbB[hAQhAGfA?zENdI\\fFTAXvBN~BF~ADr@DdANn@P\\Pp@d@j@l@bArA&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko")

  Location.destroy_all
  Location.create(route_id: route1.id, order: 0, latitude: 37.804658646908, longitude: -122.416511604074)
  Location.create(route_id: route1.id, order: 1, latitude: 37.8009287128107, longitude: -122.424579688791)
  Location.create(route_id: route2.id, order: 0, latitude: 37.6858538461387, longitude: -122.469801857287)
  Location.create(route_id: route2.id, order: 1, latitude: 37.6187186039089, longitude: -122.492408752441)
  Location.create(route_id: route3.id, order: 0, latitude: 37.806971816667, longitude: -122.405796995221)
  Location.create(route_id: route3.id, order: 1, latitude: 37.7915795319093, longitude: -122.390228268307)
  Location.create(route_id: route3.id, order: 2, latitude: 37.7799162179, longitude: -122.389325700787)

  Workout.destroy_all
  workout1 = Workout.create(create_date: '2019-07-28', user_id: user1.id, distance: 3.3, duration: 1523, elevation: 5, name: '3 Mile Run', workout_type: 'Run', description: 'I ran three miles in the morning')
  workout2 = Workout.create(create_date: '2019-08-12', user_id: user1.id, distance: 0.9, duration: 410, elevation: 22, name: 'Sprint', workout_type: 'Run', description: 'Track sprints')
  workout3 = Workout.create(create_date: '2019-07-20', user_id: user1.id, distance: 6.5, duration: 7693, elevation: 67, name: 'Mountain Hike', workout_type: 'Hike', description: 'I took a hike in the woods')
  workout4 = Workout.create(create_date: '2019-08-11', user_id: user2.id, distance: 88.7, duration: 322, elevation: 67, name: 'Green Hill Zone', workout_type: 'Run', description: 'First level')
  workout5 = Workout.create(create_date: '2019-08-10', user_id: user2.id, distance: 120.7, duration: 482, elevation: 103, name: 'Sonic Time', workout_type: 'Run', description: 'Gotta Go Fast')
  workout6 = Workout.create(create_date: '2019-08-08', user_id: user3.id, distance: 3.1, duration: 1823, elevation: 6, name: 'Long Distance Run', workout_type: 'Run', description: 'Run around the park.')
  workout7 = Workout.create(create_date: '2019-08-09', user_id: user3.id, distance: 2.4, duration: 1445, elevation: 10, name: 'Shorter Run', workout_type: 'Run', description: 'Shorter run around the park')
  workout8 = Workout.create(create_date: '2019-08-10', user_id: user4.id, distance: 1.2, duration: 945, elevation: 22, name: 'Neighborhood Walk', workout_type: 'Walk', description: 'A little walk to the store')
  workout9 = Workout.create(create_date: '2019-07-29', user_id: user5.id, distance: 1.1, duration: 964, elevation: 15, name: 'Night Run', workout_type: 'Run', description: 'I ran in the dark')

  Follow.destroy_all
  Follow.create(user_id: user1.id, follower_id: user2.id)
  Follow.create(user_id: user1.id, follower_id: user3.id)
  Follow.create(user_id: user1.id, follower_id: user4.id)
  Follow.create(user_id: user2.id, follower_id: user1.id)
  Follow.create(user_id: user3.id, follower_id: user1.id)
  Follow.create(user_id: user4.id, follower_id: user1.id)
  Follow.create(user_id: user4.id, follower_id: user5.id)
  Follow.create(user_id: user1.id, follower_id: user5.id)

  Like.destroy_all
  Like.create(user_id: user1.id, workout_id: workout4.id)
  Like.create(user_id: user1.id, workout_id: workout5.id)
  Like.create(user_id: user1.id, workout_id: workout5.id)
  Like.create(user_id: user1.id, workout_id: workout7.id)
  Like.create(user_id: user1.id, workout_id: workout8.id)
  Like.create(user_id: user1.id, workout_id: workout9.id)
  Like.create(user_id: user2.id, workout_id: workout1.id)
  Like.create(user_id: user3.id, workout_id: workout1.id)
  Like.create(user_id: user4.id, workout_id: workout1.id)
  Like.create(user_id: user5.id, workout_id: workout1.id)
  Like.create(user_id: user4.id, workout_id: workout3.id)
  Like.create(user_id: user2.id, workout_id: workout3.id)
  Like.create(user_id: user2.id, workout_id: workout2.id)

  Comment.destroy_all
  Comment.create(user_id: user3.id, workout_id: workout2.id, body:"We should run together")
  Comment.create(user_id: user1.id, workout_id: workout2.id, body:"Yeah, next time")
  Comment.create(user_id: user4.id, workout_id: workout2.id, body:"Me too")
  Comment.create(user_id: user1.id, workout_id: workout4.id, body:"That's pretty fast")
  Comment.create(user_id: user2.id, workout_id: workout4.id, body:"Gotta Go Fast!")
  Comment.create(user_id: user1.id, workout_id: workout6.id, body:"Are you training for anything?")
end
