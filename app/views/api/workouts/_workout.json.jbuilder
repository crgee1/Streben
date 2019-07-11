json.extract! workout, :id, :user_id, :name, :distance, :duration, :elevation,
              :workout_type, :description

json.users do
    json.partial! '/api/users/user', user: workout.user
end