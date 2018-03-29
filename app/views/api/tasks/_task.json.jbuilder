json.task do
  
  p(task.project.name)
  json.extract! task, :id, :title, :owner_id, :project_id, :done


  json.project_name task.project.name
  json.team_name task.project.team.name
  json.team_id task.project.team_id

end
