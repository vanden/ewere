class Api::ProjectsController < ApplicationController

  before_action :require_logged_on

  def create
    @project = Project.new(project_params)

    # Might be YAGNI, but allows for no user to be passed normally
    unless @project.owner_id then @project.owner_id = current_user.id end

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def index
    @projects = current_user.projects
  end

  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
      render 'api/projects/show'
    else
      render plain: "That project does not exist to be destroyed"
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :description, :owner_id, :team_id )
  end
end
