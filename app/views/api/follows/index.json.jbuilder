@followees.each do |followee|
  json.set! followee.id do
    json.partial! 'api/follows/follow', follow: followee
  end
end

current_user.followers.each do |follower|
  json.set! follower.id do
    json.partial! 'api/follows/follow', follow: follower
  end
end