class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      render 'api/friendships/show'
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def index
    @friendships = current_user.friendships
    render 'api/friendships/index'
  end

  def show
    @friendship = Friendship.find(params[:id])
    render 'api/friendships/show'
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render json: @friendship
  end

  private

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end
end
