# Is ultimately, what is needed:
#current_user.teams.each do |team|
# ThinkMore I seem to have handled it in the controller.
@teams.each do |team|
  json.set! team.id do
    json.extract! team, :id, :creator_id, :name, :description
  end
end
