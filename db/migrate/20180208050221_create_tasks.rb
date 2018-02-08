class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.boolean :done, default: false
      t.integer :owner_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :tasks, :owner_id
    add_index :tasks, :project_id
  end
end
