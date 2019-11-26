json.extract! user, :id, :username
json.photoUrl url_for(user.photo) if user.photo.attached?