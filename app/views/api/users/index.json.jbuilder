@users.each do |user|
  json.users do
    json.set! user.id do
      json.activities_count user.workouts.count
      json.routes_count user.routes.count
      json.partial! 'api/users/user', user: user
    end
  end
end

current_user.followees.each do |follow|
  json.follows do
    json.set! follow.id do
      json.partial! 'api/follows/follow', follow: follow
    end
  end
end
