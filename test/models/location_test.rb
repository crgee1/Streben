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

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
