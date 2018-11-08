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
    @user = User.find(params[:user_id])
    @appointment = @user.appointments.create(appointment_params)
    render json: @appointment
  end

  def update
    @user = User.find(params[:user_id])
    @appointment = @user.appointments.find(params[:id]).update(appointment_params)
    render json: @appointment
  end

  def destroy
    @user = User.find(params[:user_id])
    @appointment = @user.appointments.find(params[:id]).destroy
    render status: 200
  end



  private

  def appointment_params
    params.require(:appointment).permit(:date, :time)
  end

end