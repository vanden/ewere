# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(email: "guest@example.com", username: "guest", password:"password")                    
user2 = User.create!(email: "vanden@gmail.com", username: "Brian", password:"123456")
user3 = User.create!(email: "pat@example..com", username: "Pat", password:"123456")
user4 = User.create!(email: "sam@example.com", username: "Sam", password:"123456")
user5 = User.create!(email: "chris@example.com", username: "Chris", password:"123456")
user6 = User.create!(email: "hillary@example.com", username: "Hillary", password:"123456")
user7 = User.create!(email: "alex@example.com", username: "Alex", password:"123456")
user8 = User.create!(email: "drew@example.com", username: "Drew", password:"123456")

demo_id = User.find_by(username: "guest").id


team1 = Team.create!(name: "Operations", description: "In charge of all things operations", creator_id: 5)
team2 = Team.create!(name: "Architecture", description: "Thinking big thoughts", creator_id: 6)
team3 = Team.create!(name: "Marketing", description: "Promote, promote, promote", creator_id: 7)
team4 = Team.create!(name: "Sales", description: "Sell, sell, sell", creator_id: 8)
team5 = Team.create!(name: "Development", description: "Developers, developers, developers, developers", creator_id: 2)

# Add team creators as members:
TeamMembership.create!(team_id: team1.id, member_id: team1.creator_id)
TeamMembership.create!(team_id: team2.id, member_id: team2.creator_id)
TeamMembership.create!(team_id: team3.id, member_id: team3.creator_id)
TeamMembership.create!(team_id: team4.id, member_id: team4.creator_id)
TeamMembership.create!(team_id: team5.id, member_id: team5.creator_id)

# Add some more members
TeamMembership.create!(team_id: team1.id, member_id: user4.id)
TeamMembership.create!(team_id: team3.id, member_id: user3.id)
TeamMembership.create!(team_id: team5.id, member_id: user6.id)
TeamMembership.create!(team_id: team2.id, member_id: user2.id)


TeamMembership.create!(team_id: team1.id, member_id: demo_id)
TeamMembership.create!(team_id: team2.id, member_id: demo_id)
TeamMembership.create!(team_id: team3.id, member_id: demo_id)
TeamMembership.create!(team_id: team4.id, member_id: demo_id)
TeamMembership.create!(team_id: team5.id, member_id: demo_id)


proj1 = Project.create!(name: "Develop eWere", description: "Build tool to manage tasks", owner_id: 2, team_id: team5.id)
proj2 = Project.create!(name: "Design eWere", description: "Think big thoughts about task management", owner_id: 2, team_id: team2.id)
proj3 = Project.create!(name: "Design eWere's successor", description: "Think even bigger thoughts about task management", owner_id: team2.creator_id, team_id: team2.id)
project4 = Project.create!(name: "Study market for eWere", description: "Determine if there is space for eWere in the marketplace", owner_id: team3.creator_id, team_id: team3.id)
