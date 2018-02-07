json.team do
  json.extract! team, :id, :creator_id, :name, :description
end


json.members do
  json.array! team.members, :id, :username
end

json.projects do
  json.array! team.project, :id:, :name, :description
