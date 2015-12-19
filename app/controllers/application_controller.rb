class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  force_ssl if: :ssl_configured?

  # Ensure you have a valid cert in your Trust Store to
  # work on localhost
  #
  def ssl_configured?
    true
  end
end
