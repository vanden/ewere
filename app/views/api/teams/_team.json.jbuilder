json.team do
  json.extract! team, :id, :creator_id, :name, :description
end

json.members do
  json.array! team.members, :id, :username
end
# json.members.each do |member|
#   json.set! member.id do
#     json.extract! member, :id, :username
#   end
# end


json.projects do
  # make project a ruby hash FixMe  # Follow model in index
  json.array! team.projects, :id, :name, :description
end
