class Like < ApplicationRecord
    validates :user_id, :workout_id, presence: true

    belongs_to :user

    belongs_to :workout
    # foreign_key: "workout_id",
    # class_name: "Workout"
end
