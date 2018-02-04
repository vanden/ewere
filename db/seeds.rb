# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(email: "guest@example.com", username: "guest", password:"password")
user2 = User.create(email: "vanden@gmail.com", username: "Brian", password:"123456")
user3 = User.create(email: "pat@example..com", username: "Pat", password:"123456")
user4 = User.create(email: "sam@example.com", username: "Sam", password:"123456")
user5 = User.create(email: "chris@example.com", username: "Chris", password:"123456")
user6 = User.create(email: "hillary@example.com", username: "Hillary", password:"123456")
user7 = User.create(email: "alex@example.com", username: "Alex", password:"123456")
user8 = User.create(email: "drew@example.com", username: "Drew", password:"123456")

team1 = Team.create(name: "Operations", description: "In charge of all things operations", creator_id: 5)
team2 = Team.create(name: "Architecture", description: "Thinking big thoughts", creator_id: 6)
team3 = Team.create(name: "Marketing", description: "Promote, promote, promote", creator_id: 7)
team4 = Team.create(name: "Sales", description: "Sell, sell, sell", creator_id: 8)
team5 = Team.create(name: "Development", description: "Developers, developers, developers, developers", creator_id: 1)



