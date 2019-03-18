3.times do
  menu = Menu.create(
    name: Faker::Restaurant.name
  )

  10.times do
    item = Item.create(
      name: Faker::Food.sushi,
      price: rand(3..15),
      menu_id: rand(1..3)
    )
  end
end

puts "data seeded"