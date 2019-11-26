json.users do
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user
    end
end

json.workouts do 
    @user.workouts.each do |workout|
        json.set! workout.id do
            json.partial! 'api/workouts/workout', workout: workout
        end
    end
end

json.routes do 
    @user.routes.each do |route|
        json.set! route.id do
            json.partial! 'api/routes/route', route: route
        end
    end
end

json.follows do 
    @user.followers.each do |follow|
        json.set! follow.id do
            json.partial! 'api/follows/follow', follow: follow
        end
    end
    @user.followees.each do |follow|
        json.set! follow.id do
            json.partial! 'api/follows/follow', follow: follow
        end
    end
end
