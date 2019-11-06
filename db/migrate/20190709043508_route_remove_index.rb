class RouteRemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :routes, [:name, :user_id]
    add_index :routes, :user_id
  end
end
