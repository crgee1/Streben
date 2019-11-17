@likes.each do |like|
  json.set! like.id do
    json.partial! 'api/likes/like', like: like
  end
end

# current_user.followers.each do |follower|
#   json.set! follower.id do
#     json.partial! 'api/follows/follow', follow: follower
#   end
# end