class Api::TeamMembershipsController < ApplicationController

  def create
    @team_membership = TeamMembership.new(team_membership_params)

    if @team_membership.save
      @team = team_membership.team
      # Show a team, not all teams, right? # ThinkMore
      render "api/teams/show"
    else
      render json: @team_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @team_membership = TeamMembership.find(params[:id])

    if @team_membership.destroy
      # Where to go, now? # Question
      # placeholder until I figure it out
      redirect_to root_url
    else
      render plain: "You cannot destroy a non-existent membership"
    end

  end


  private

  def team_membership_params
    params.require(:team_membership).permit(:team_id, :member_id)
  end
end
