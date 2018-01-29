class Api::SessionsController < ApplicationController
  def create
    @user = User.find_user_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      signin(@user)
      render :show
    else
      render json: "invalid username or password", status: 401
    end
  end

  def destroy
    if signedin?
      signout
      render json: {}
    else
      render json: "not found", status: 404
    end
  end
end
