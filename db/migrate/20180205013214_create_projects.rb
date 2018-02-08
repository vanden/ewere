class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|

      # Should this be scoped to the Team? How? # FixMe
      # I decided it should so removed # , unique: true
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.integer :team_id, null: false
      # I guess I should allow an empty description # ThinkMore
      t.text :description

      t.timestamps
    end
    add_index :projects, :owner_id
    add_index :projects, :team_id
  end
end
