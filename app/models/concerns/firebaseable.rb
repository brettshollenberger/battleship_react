require 'active_support/concern'

module Firebaseable
  extend ActiveSupport::Concern

  included do
    after_save :save_to_firebase, unless: -> do
      Rails.env.test?
    end

    after_destroy :destroy_in_firebase
  end

  def save_to_firebase
    firebase_client.set(firebase_path, self.as_json)
  end

  def destroy_in_firebase
    firebase_client.delete(firebase_path)
  end

  private

  def to_firebase
    as_json
  end

  def firebase_client
    Tilr84::Application::FIREBASE_CLIENT
  end

  def firebase_path
    "#{self.class.name.underscore}/#{id}"
  end
end

