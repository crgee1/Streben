class Api::WorkoutsController < ApplicationController
  def create
    @workout = Workout.new(workout_params)

    if @workout.save
      render 'api/workouts/show'
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def update
    @workout = current_user.workouts.find(params[:id])
    if @workout.update_attributes(workout_params)
      render 'api/workouts/show'
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def index
    @workouts = Workout.all
    render 'api/workouts/index'
  end

  def show
    @workout = Workout.find(params[:id])
    @user = @workout.user
    render 'api/workouts/show'
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy
    render json: @workout
  end

  private

  def workout_params
    params.require(:workout).permit(:name, :create_date, :user_id, :distance, :elevation, :description, :duration, :workout_type)
  end
end
