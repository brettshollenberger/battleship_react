require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BattleshipReact
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true

    config.session_store :redis_store, servers: Redis.current
  end
end
