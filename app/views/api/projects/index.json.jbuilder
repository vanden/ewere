# Is ultimately, what is needed:
#current_user.projects.each do |project|
# ThinkMore I seem to have handled the issue in the controller.

@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :owner_id, :team_id, :name, :description
  end
end
