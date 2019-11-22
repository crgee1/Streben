class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.all
    render 'api/comments/index'
  end

  def show
    @comment = Comment.find(params[:id])
    render 'api/comments/show'
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :workout_id, :body)
  end
end

