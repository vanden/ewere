class Api::TeamsController < ApplicationController

  before_action :require_logged_on

  def create
    @team = Team.new(team_params)
    @team.creator_id = current_user.id

    if @team.save
      # Temporarily commented out as TeamMembership.create does not yet
      # exist
      # TeamMembership.create(
      #            member_id: current_user.id, team_id: @team.id)
      #
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end


  def destroy
    @team = Team.find(params[:id])
    if @team.destroy
      render "api/teams/show"
    else
      render plain: "That team does not exist to be destroyed."
    end
  end


  def index
    @teams = Team.all
  end


  def update
    @team = Team.find(params[:id])
    if @team.update_attributes(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end


  def show
    @team = Team.find(params[:id])
  end


  private


  def team_params
    params.require(:team).permit(:name, :description)
  end
end
