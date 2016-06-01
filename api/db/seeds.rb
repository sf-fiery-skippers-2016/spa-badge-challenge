# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

10.times do
  Student.create(name: Faker::Name.name, password_digest: 'password', email: Faker::Internet.email)
end

20.times do
  Badge.create(student_id: rand(1..10), phrase: Faker::Hipster.sentence)
end

20.times do
  Vote.create(student_id: rand(1..10), badge_id: rand(1..20))
end

