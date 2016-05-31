class Cohort < ActiveRecord::Base
  has_many :teachers

  validates :name, presence: true
end
