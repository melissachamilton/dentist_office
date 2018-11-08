class Api::AppointmentsController < ApplicationController
  def index
    @appointments = User.find(params[:user_id]).appointments
    render json: @appointments
  end

  def show
    @user = User.find(params[:user_id])
    @appointments = @user.appointments.find(params[:id])
    render json: @appointments
  end

  def create
    @city = City.find(params[:city_id])
    @city_post = @city.posts.create(city_post_params)
    render json: @city_post
  end

  def update
    @city = City.find(params[:city_id])
    @city_post = @city.posts.find(params[:id]).update(city_post_params)
    render json: @city_post
  end

  def destroy
    @city = City.find(params[:city_id])
    @city_post = @city.posts.find(params[:id]).destroy
    render status: 200
  end



  private

  def city_post_params
    params.require(:city_post).permit(:title, :content)
  end

end