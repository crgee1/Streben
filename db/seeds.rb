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
  route1 = Route.create(user_id: user1.id, distance: 0.92, duration: 747, elevation: 63, name: 'First Run', description: 'First route of the season', url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.80462,-122.41656&markers=label:E%7C37.79795,-122.42374000000001&path=color:0x0000ff80|weight:2|enc:{uveFnndjV}@zAi@x@Dh@HdATpDb@fHj@vHh@dIf@xHrJkAjDa@XG`D]~ASpDe@fFm@&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko")
  route2 = Route.create(user_id: user1.id, distance: 3.0, duration: 2437, elevation: 169, name: 'Run Along The Beach', description: '3 mile beach run', url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.6593,-122.49220000000001&markers=label:E%7C37.61894,-122.49260000000001&path=color:0x0000ff80|weight:2|enc:sizdFfgsjVvFs@rCUf@@zBPlAFbAA`@E|@S`@Ov@c@`CqA~@_@lAYdAKv@A~@N`@DbAEp@ILDr@Id@?d@ATCbIjAtARhAPnE|@p@LtB\\HFr@VZLFLv@t@n@d@TLLATFh@BdAAvFO~DGvQYtDG|AEtBMbCQ~AGvFU|BGnBFhAF`AH~@Vn@XPL`@Nf@Dh@ArKATCJFBHEb@?hB?hAAFFRDVJL\\F`Fd@|A@`EZnDFpJ\\zCXfAPpE^^Hd@Pl@\\b@H`@@nASVQ\\ARQ\\]^]JEV]FWVe@Po@Xc@JIRIb@MPORWL[ToBA[EQ&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko")
  route3 = Route.create(user_id: user1.id, distance: 4.1, duration: 3331, elevation: 44, name: 'Multi-Point', description: 'South City route', url: "https://maps.googleapis.com/maps/api/staticmap?size=300x180&markers=label:S%7C37.647650000000006,-122.40610000000001&markers=label:E%7C37.657140000000005,-122.41641000000001&path=color:0x0000ff80|weight:2|enc:y`xdFbmbjVEEEK@cAU?OCMMe@@WAQRkA?gB?i@?YGq@hBOf@E^@`APpAn@|CX`BTf@RZ@LHFPHz@PlKdBdFz@fDh@tCj@fAZrAf@\\PjBbAt@f@fA`@ZFVCZC`@BZHFCBP|AzF@B@BJFB@D?E?CAC?EECCAE}A{Fe@Nc@\\i@p@Wl@{@hDMZbCCtEEJ??P`FpRCPR@_@ZQNSTS\\Of@Gb@@r@Jp@Nb@T^RZbChC~BvBtBvBANe@|@kAxBd@dBaI~DsDnBsDxBcDvBuA`AHPN^qFtDiLzH}KtH_An@FRGSMHcAj@iH~DQYcAeDcAqDaA_Dg@gBi@eA_DmCoDaDaHkGy@s@qBk@kDy@oFqAyCu@KCFi@RwAx@eG`AgHjBiNVmB&key=AIzaSyCpCGBt5GjRXJ8H48OKvz2TeuoNWAqlZko")

  Location.destroy_all
  location1 = Location.create(route_id: route1.id, order: 0, latitude: 37.804658646908, longitude: -122.416511604074)
  location2 = Location.create(route_id: route1.id, order: 1, latitude: 37.8009287128107, longitude: -122.424579688791)
  location3 = Location.create(route_id: route2.id, order: 0, latitude: 37.6858538461387, longitude: -122.469801857287)
  location4 = Location.create(route_id: route2.id, order: 1, latitude: 37.6187186039089, longitude: -122.492408752441)
  location5 = Location.create(route_id: route3.id, order: 0, latitude: 37.6476640012983, longitude: -122.406152797555)
  location6 = Location.create(route_id: route3.id, order: 1, latitude: 37.6158522976268, longitude: -122.397226405954)
  location7 = Location.create(route_id: route3.id, order: 2, latitude: 37.648207224437, longitude: -122.429553732746)
  location7 = Location.create(route_id: route3.id, order: 3, latitude: 37.6572596294909, longitude: -122.416367660095)
end
