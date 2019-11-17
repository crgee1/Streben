json.workouts do
  json.partial! 'api/workouts/workout', workout: @workout
end

json.users do
  json.partial! 'api/users/user', user: @workout.user
end

json.likers do
  @workout.likers.each do |liker|
    json.set! liker.id do
      json.partial! 'api/users/user', user: liker
    end
  end
end