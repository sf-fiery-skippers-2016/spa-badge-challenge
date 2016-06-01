
Teacher.create(name: "Penny")
Teacher.create(name: "Willy")
Teacher.create(name: "Billy")
Teacher.create(name: "Carrie")
Teacher.create(name: "Kiley")

10.times do
  Badge.create(phrase: Faker::Hipster.word, teacher: Teacher.all.sample)
end

20.times do
  Vote.create(vote_type: ["up", "down"].sample, badge: Badge.all.sample)
end

