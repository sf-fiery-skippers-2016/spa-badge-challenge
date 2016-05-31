class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.integer :student_id
      t.string :phrase

      t.timestamps null: false
    end
  end
end
