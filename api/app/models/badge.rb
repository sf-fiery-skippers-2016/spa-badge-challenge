class Badge < ActiveRecord::Base
  has_many :votes
  belongs_to :teacher
end
