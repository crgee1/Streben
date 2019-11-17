# == Schema Information
#
# Table name: workouts
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  distance     :float            not null
#  duration     :integer          not null
#  elevation    :integer          not null
#  name         :string           not null
#  workout_type :string           not null
#  description  :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  create_date  :date
#

class Workout < ApplicationRecord
  validates :user_id, :create_date, :distance, :duration, :elevation, :name, :workout_type, presence: true

  belongs_to :user

  has_many :likes

  has_many :likers,
  through: :likes,
  source: :user

end
