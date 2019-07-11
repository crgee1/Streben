@routes.each do |route|
  json.routes do
    json.set! route.id do
      json.extract! route, :id, :user_id, :name, :distance, :duration, :elevation, 
                    :description, :url, :created_at
    end
  end

  json.locations do
    route.locations.each do |location|
      json.set! location.id do
        json.partial! 'api/locations/location', location: location
      end
    end
  end

  json.users do
    json.set! route.user.id do
      json.extract! route.user, :id, :username
    end
  end
end
