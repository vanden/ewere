#current_user.projects.each do |project| // Ultimately, what is needed
@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :owner_id, :team_id, :name, :description
  end
end
