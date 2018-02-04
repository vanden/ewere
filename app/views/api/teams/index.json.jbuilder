#current_user.teams.each do |team| // Ultimately, what is needed
@teams.each do |team|
  json.set! team.id do
    json.extract! team, :id, :creator_id, :name, :description
  end
end
