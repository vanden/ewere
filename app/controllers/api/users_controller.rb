class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)

      # Suboptimal solution to the problem that presently there is no
      # way for users to join groups through the app. It is what there
      # is time for, right now.
      Team.all.each { |team| @user.teams << team }
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
end
