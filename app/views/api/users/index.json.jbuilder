@users.each do |user|
  json.users do
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

current_user.friendships.each do |friendship|
  json.friendships do
    json.set! friendship.id do
      json.partial! 'api/friendships/friendship', friendship: friendship
    end
  end
end
