json.workouts do
  # json.set! @workout.id do
  json.partial! 'api/workouts/workout', workout: @workout
  #   json.extract! @workout, :id, :user_id, :name, :distance, :duration, :elevation,
  #                :workout_type, :description, :create_date
  # end
end

json.users do
  # json.set! @workout.user.id do
  json.partial! 'api/users/user', user: @workout.user
    # json.extract! @workout.user, :id, :username
  # end
end