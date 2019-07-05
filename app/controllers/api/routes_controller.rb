class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)
  end

  def update
    @route = Route.find(params[:id])
    if @route.update_attributes(route_params)
      render 'api/routes/show'
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = Route.all
  end

  def show
    @route = Route.find(params[:id])
  end

  def destroy
    @route = Route.find(params[:id])
    @route.destroy
  end

  private

  def route_params
    params.require(:route).permit(:name, :user_id, :distance, :elevation, :description)
  end
end
