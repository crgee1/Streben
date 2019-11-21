class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :workout_id, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end
