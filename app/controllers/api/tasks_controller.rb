class Api::TasksController < ApplicationController

  before_action :require_logged_on

  def create

    @task = Task.new(task_params)

    @task.owner_id = current_user.id

    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update_attributes(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find(params[:id])
  end

  def index
    @tasks = current_user.tasks
  end

  def destroy
    @task = Task.find(params[:id])

    if @task.destroy
      render 'API/tasks/show'
    else
      render plain: "That task does not exist to be destroyed"
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :owner_id, :project_id)
  end
end
