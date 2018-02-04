class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name, null: false, unique: true
      t.text :description, null: false
      t.integer :creator_id, null: false
      
      t.timestamps
    end
    add_index :teams, :creator_id
  end
end
