json.routes do
  json.extract! @route, :id, :user_id, :name, :distance, :duration, :elevation, 
                :description, :url, :created_at
end

json.locations do
  @route.locations.each do |location|
    json.set! location.id do
      json.partial! 'api/locations/location', location: location
    end
  end
end

json.users do
  json.partial! 'api/users/user', user: @route.user
end