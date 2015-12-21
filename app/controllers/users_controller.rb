class UsersController < ApplicationController
  def index
    ActionCable.server.broadcast "users_#{cookies.signed[:battleship_session_id]}", title: "join_game", message: "greetings, user!", session_id: cookies.signed[:battleship_session_id]
    head :ok
  end
end
