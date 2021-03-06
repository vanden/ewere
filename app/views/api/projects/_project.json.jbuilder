json.project do
  json.extract! project, :id, :owner_id, :name, :description, :team_id
  json.partial! project.team
end



# But, this should be a ruby hash. FixMe # Follow model in index
json.members do
  json.array! project.members, :id, :username
end


json.tasks do
  json.array! project.tasks, :id, :title, :owner_id
end
