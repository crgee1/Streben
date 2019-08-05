class AddDate < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :create_date, :date, presence: true
  end
end
