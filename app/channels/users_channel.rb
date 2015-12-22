class UsersChannel < ApplicationCable::Channel
  def subscribed
    stream_from "users_#{self.session_id}"
  end
end

