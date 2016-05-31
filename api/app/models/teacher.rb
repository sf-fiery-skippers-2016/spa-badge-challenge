class Teacher < ActiveRecord::Base
  has_many :badges
  belongs_to :cohort

  validates :name, presence: true
end
