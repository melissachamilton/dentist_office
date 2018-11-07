class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def update
    @user = User.find(params[:id]).update(user_params)
    render json: @user
  end

  def destroy
    @user = User.find(params[:id]).delete
    render status: 200
  end



  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :address, :insurance)
  end

end
