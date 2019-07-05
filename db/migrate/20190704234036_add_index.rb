class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :routes, [:name, :user_id], unique: true
  end
end
