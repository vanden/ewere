json.project do
  json.extract! project, :id, :owner_id, :name, :description, :team_id
end

# But, this should be a ruby hash. FixMe # Follow model in index
json.members do
  json.array! project.members, :id, :username
end
