json.task do
  json.extract! task, :id, :title, :owner_id, :project_id, :done
  json.partial! task.project
end
