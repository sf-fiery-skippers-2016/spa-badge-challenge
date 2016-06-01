class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.integer :teacher_id
      t.string :body

      t.timestamps null: false
    end
  end
end
