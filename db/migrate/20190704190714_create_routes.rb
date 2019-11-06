class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false
      t.float :distance, null: false
      t.integer :duration, null: false
      t.integer :elevation, null: false
      t.string :name, null: false
      t.text :description
      t.timestamps
    end
    add_index :routes, :name, unique: true
  end
end
