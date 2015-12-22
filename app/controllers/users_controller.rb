class UsersController < ApplicationController
  def index
    ActionCable.server.broadcast "users_#{session_id}", title: "join_game", message: "greetings, user!", session_id: session_id
    head :ok
  end
end
