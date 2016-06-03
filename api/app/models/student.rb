class Student < ActiveRecord::Base
 has_many :votes
 has_many :badges
 has_secure_password
end
