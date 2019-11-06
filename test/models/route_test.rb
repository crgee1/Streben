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

require 'test_helper'

class RouteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
