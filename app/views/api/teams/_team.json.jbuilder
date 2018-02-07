json.team do
  json.extract! team, :id, :creator_id, :name, :description
end

json.members do
  json.array! team.members, :id, :username
end


json.projects do
  # make project a ruby hash FixMe  # Follow model in index
  json.array! team.projects, :id, :name, :description
end
