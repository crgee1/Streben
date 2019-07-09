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
  user3 = User.create(username: 'Knuckles', password: 'password')
  user4 = User.create(username: 'kallmeehkev', password: 'password')
  user5 = User.create(username: 'JimboJams', password: 'password')
  user6 = User.create(username: 'SoapyRedPanda', password: 'password')
  user7 = User.create(username: 'username', password: 'password')

  Route.destroy_all
  # route1 = Route.create(user_id: user1.id, distance: 3, duration: 1401, elevation: 24, name: 'First Run', description: 'Super fun and energizing')
  # route2 = Route.create(user_id: user1.id, distance: 5, duration: 1923, elevation: 12, name: 'Second Run', description: 'I saw a deer while running')
  # route3 = Route.create(user_id: user1.id, distance: 1, duration: 418, elevation: 8, name: 'Third Run', description: '1 mile sprint')
  # route4 = Route.create(user_id: user2.id, distance: 1, duration: 418, elevation: 8, name: 'Buddy Run', description: 'My friend showed me this route')
  # route5 = Route.create(user_id: user2.id, distance: 2, duration: 900, elevation: 29, name: 'Local Jog', description: 'Just around my neighborhood')
end
