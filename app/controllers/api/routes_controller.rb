class Api::RoutesController < ApplicationController
  def create
    @route = Route.new(route_params)

    if @route.save
      render 'api/routes/show'
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def update
    @route = current_user.routes.find(params[:id])
    if @route.update_attributes(route_params)
      render 'api/routes/show'
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = Route.all
    render 'api/routes/index'
  end

  def show
    @route = Route.find(params[:id])
    render 'api/routes/show'
  end

  def destroy
    @route = Route.find(params[:id])
    @route.destroy
    render json: @route
  end

  private

  def route_params
    params.require(:route).permit(:name, :user_id, :distance, :elevation, :description, :duration, :url)
  end
end
