# == Schema Information
#
# Table name: routes
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  distance    :float            not null
#  duration    :integer          not null
#  elevation   :integer          not null
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  url         :text
#

class Route < ApplicationRecord
  validates :user_id, :url, :distance, :duration, :elevation, :name, presence: true

  belongs_to :user
  has_many :locations
end
