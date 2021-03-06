class Api::TeamsController < ApplicationController

  before_action :require_logged_on

  def create
    @team = Team.new(team_params)
    @team.creator_id = current_user.id

    if @team.save
      TeamMembership.create(
                 member_id: current_user.id, team_id: @team.id)
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
    @teams = current_user.teams
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
    if Team.exists?(params[:id])
      @team = Team.find(params[:id])
      render :show
    else
      render json: ["THE BOGUS OCCURED"], status: 404
    end
  end


  private

  def team_params
    # shouldn't this also have creator_id? (Once it is changed to
    # owner_id, anyway?) Or, should that just be handled by setting it
    # to the current user? # ThinkMore
    params.require(:team).permit(:name, :description)
  end
end
