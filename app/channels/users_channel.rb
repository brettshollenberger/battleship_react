class UsersChannel < ApplicationCable::Channel
  def subscribed
    stream_from "users_#{self.session_id}"
  end

  def request_seed_data
    ActionCable.server.broadcast(
      "users_#{self.session_id}",
      resource_type: "game",
      action: "index",
      args: {
        index: BattleshipReact::Application::FIREBASE_CLIENT.get("users/#{self.session_id}/games").body
      }
    )
  end
end

