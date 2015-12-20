class GamesController < ApplicationController
  def index
    p "games#index Time #{Time.now.utc}"
  end
end
