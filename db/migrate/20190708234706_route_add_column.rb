class RouteAddColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :url, :text
  end
end
