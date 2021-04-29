class CreateGyms < ActiveRecord::Migration[6.1]
  def change
    create_table :gyms do |t|
      t.string :name
      t.string :address
      t.string :img
      t.string :slogan

      t.timestamps
    end
  end
end
