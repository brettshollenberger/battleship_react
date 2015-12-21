module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :session_id

    def connect
      self.session_id = find_session_id
      logger.add_tags 'ActionCable', self.session_id
    end

    protected
    def find_session_id
      unless session_id.present?
        reject_unauthorized_connection
      else
        p "YAYYY"
        session_id
      end
    end

    def session_id
      cookies.signed[:battleship_session_id]
    end
  end
end
