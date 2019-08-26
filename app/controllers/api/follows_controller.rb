class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render 'api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def index
    @follows = current_user.follows
    render 'api/follows/index'
  end

  def show
    @follow = Follow.find(params[:id])
    render 'api/follows/show'
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render json: @follow
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :friend_id)
  end
end
