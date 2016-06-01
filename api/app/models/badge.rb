class Badge < ActiveRecord::Base
  belongs_to :teacher
  has_many :votes

  validates :body, presence: true
end
