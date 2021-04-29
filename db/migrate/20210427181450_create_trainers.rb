class CreateTrainers < ActiveRecord::Migration[6.1]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :personality
      t.string :specialty
      t.string :img
      t.references :gym, null: false, foreign_key: true

      t.timestamps
    end
  end
end
