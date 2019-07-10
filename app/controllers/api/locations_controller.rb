class Api::LocationsController < ApplicationController
  def create
    @location = Location.new(location_params)

    if @location.save
      render 'api/locations/show'
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def update
    @location = current_user.routes.locations.find(params[:id])
    if @location.update_attributes(location_params)
      render 'api/locations/show'
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def index
    @locations = Location.all
    render 'api/locations/index'
  end

  def show
    @location = Location.find(params[:id])
    render 'api/locations/show'
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    render json: @location
  end

  private

  def location_params
    params.require(:location).permit(:route_id, :order, :latitude, :longitude)
  end
end
