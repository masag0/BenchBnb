class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signedin?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signin(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def signout
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def signedin?
    !!current_user
  end
end
