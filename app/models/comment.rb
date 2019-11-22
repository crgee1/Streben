class Comment < ApplicationRecord
    validates :user_id, :workout_id, :body, presence: true

    belongs_to :user
    
    belongs_to :workout
end
