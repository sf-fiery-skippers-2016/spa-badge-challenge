class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string   :vote_type
      t.references  :badge

      t.timestamps null: false
    end
  end
end
