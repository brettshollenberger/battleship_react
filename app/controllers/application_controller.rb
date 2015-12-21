class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :load_session!
  before_action :sign_session_id_cookie

  # force_ssl if: :ssl_configured?

  # Ensure you have a valid cert in your Trust Store to
  # work on localhost
  #
  # def ssl_configured?
  #   true
  # end

  def unauthenticated
    { :json => {success: false, 
                error: "You must authenticate in order to make this request.",
                status:  "401"}, 
                :status => "401" }
  end

  def unauthorized
    { :json => {success: false, 
                error: "You are not authorized to make this request.",
                status:  "403"}, 
                :status => "403" }
  end

  def ok
    head :ok
  end

  def load_session!
    unless session.loaded?
      session[:games] = []
    end
  end

  def session_id
    cookies.signed[:battleship_session_id]
  end

  def sign_session_id_cookie
    unless session_id.present?
      cookies.signed[:battleship_session_id] = { value: session.id, expires: 1.day.from_now }
    end
  end
end
