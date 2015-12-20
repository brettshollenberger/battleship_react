class SessionsController < ApplicationController
  before_action :load_session!
  before_action :sign_session_id_cookie

  def create
    p "sessions#create Time #{Time.now.utc}"
    redirect_to games_url
  end

private
  def load_session!
    unless session.loaded?
      session[:games] = []
    end
  end

  def sign_session_id_cookie
    cookies[:battleship_session_id] = { value: session.id, expires: 1.day.from_now }
    # cookies.signed[:battleship_session_id] = session.id
  end
end
