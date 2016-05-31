class Vote < ActiveRecord::Base
  belongs_to :badge

  validates :value, presence: true, inclusion: { in: [-1, 1] }
end
