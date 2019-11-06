class EditWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_index :workouts, [:name, :user_id]
    add_index :workouts, :user_id
    change_column :workouts, :distance, :float
    change_column :workouts, :duration, :integer
    change_column :workouts, :elevation, :integer
    change_column :workouts, :name, :string
  end
end
