class MessagesController < ApplicationController
  def index
    ActionCable.server.broadcast 'messages', message: "YO DAWG", session_id: cookies[:battleship_session_id]
    head :ok
  end
end
