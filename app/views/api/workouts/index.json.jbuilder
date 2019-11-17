@workouts.each do |workout|
  json.workouts do
    json.set! workout.id do
      # json.extract! workout, :id, :user_id, :name, :distance, :duration, :elevation,
      #               :workout_type, :description, :create_date
    json.partial! 'api/workouts/workout', workout: workout
    end
  end

  json.users do
    json.set! workout.user.id do
      json.partial! 'api/users/user', user: workout.user
    end

    workout.likers.each do |liker|
      json.set! liker.id do
        json.partial! 'api/users/user', user: liker
      end
    end

  end
end
