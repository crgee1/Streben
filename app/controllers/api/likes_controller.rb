class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    @likes = Like.all
    render 'api/likes/index'
  end

  def show
    @like = Like.find(params[:id])
    render 'api/likes/show'
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render json: @like
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :workout_id)
  end
end
