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
#

class Workout < ApplicationRecord
  validates :user_id, :distance, :duration, :elevation, :name, presence: true
  validates :name, uniqueness: true

  belongs_to :user
end
