@users.each do |user|
  json.users do
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

current_user.friends.each do |friend|
  json.friendships do
    json.set! friend.id do
      json.partial! 'api/friendships/friendship', friendship: friend
    end
  end
end
