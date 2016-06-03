class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :student_id
      t.integer :badge_id
      t.string :vote_type

      t.timestamps null: false
    end
  end
end
