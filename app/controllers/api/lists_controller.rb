# frozen_string_literal: true

class Api::ListsController < ApplicationController
  
  def index
    @lists = List.All
    render json: @lists
  end

  def show
    @list = List.find(params[:id])
    render json: @list
  end

  def create
    @list = List.create!(list_params)
    render json: @list
  end

  def update
    @list = List.find(params[:id])
    @list.update!(list_params)
  end

  def destroy
    @list = List.find(params[:id]).destroy
    render status: :ok
  end

  private

  def list_params
    params.require(:list).permit(:name, :description)
  end
end
