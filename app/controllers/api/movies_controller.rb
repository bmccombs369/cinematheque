class Api::MoviesController < ApplicationController
  def index
    @movies = List.find(params[:list_id]).movies
    render json: @movies
  end

  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end

  def create

  end

  def update

  end

  def destroy

  end

  private

  def movie_params
    params.require(:movie).permit(:movie_db_id)
  end
end