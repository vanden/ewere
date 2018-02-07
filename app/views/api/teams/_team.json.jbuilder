json.team do
  json.extract! team, :id, :creator_id, :name, :description
end

json.members do
  team.members.each do |member|
    json.set! member.id do
    json.extract! member, :id, :username
    end
  end
end

json.projects do
  # make project a ruby hash FixMe  # Follow model in index
  json.array! team.projects, :id, :name, :description
end

# This makes everything fall apart, yet was modeled on members one
# that Aaron worked out for me. Wut
#
# json.projects do
#   team.projects.each do |project|
#     puts(project)
#     json.set! project.id do
#       json.extract! project, :id, :name, :description
#     end
#   end
# end
