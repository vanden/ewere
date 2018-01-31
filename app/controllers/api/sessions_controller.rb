class Api::SessionsController < ApplicationController

  def create

    email = params[:user][:email]
    pword = params[:user][:password]
    @user = User.find_by_credentials(email, password)
    
    if @user
      login(@user)
      render "/api/users/show"
    else
      render json: ["Invalid credentials"], status 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No user is currently signed in"], status 404
    end
  end
end
