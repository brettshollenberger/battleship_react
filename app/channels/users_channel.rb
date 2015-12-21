class UsersChannel < ApplicationCable::Channel
  def subscribed
    p "SUBSCRIBED TO USERS #{self.session_id}"
    stream_from "users_#{self.session_id}"
  end
end

