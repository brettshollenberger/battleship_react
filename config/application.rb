require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BattleshipReact
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true

    config.session_store :redis_store, 'redis://localhost:6379/0/cache'

    FIREBASE_URL    = "https://klax.firebaseio.com/"
    FIREBASE_CLIENT = Firebase::Client.new(FIREBASE_URL, ENV["FIREBASE_SECRET"])
  end
end
