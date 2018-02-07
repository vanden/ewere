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

# This makes everything fall apart, yet was modeled on members one
# that Aaron worked out for me. Wut
#
json.projects do
  team.projects.each do |project|
    puts(project)
    json.set! project.id do
      json.extract! project, :id, :name, :description
    end
  end
end


## At some point in the bug hunt, switched to the following. Keeping
## here for superstition. FixMe Get rid of, eventually
# json.projects do
#   if team.projects
#     team.projects.each do |project|
#       json.set! project.id do
#         json.extract! project, :id, :name, :description
#       end
#     end
#   else
#     {}
#   end
# end
