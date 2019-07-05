# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  route_id   :integer          not null
#  order      :integer          not null
#  latitude   :float            not null
#  longitude  :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
  validates :route_id, :order, :latitude, :longitude, presence: true

  belongs_to :route
end
