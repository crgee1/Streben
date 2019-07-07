class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false
      t.float :distance, null: false
      t.integer :duration, null: false
      t.integer :elevation, null: false
      t.string :name, null: false
      t.string :workout_type, null: false
      t.text :description
      t.timestamps
    end
    add_index :workouts, [:name, :user_id], unique: true
  end
end
