require 'zeus/rails'

class CustomPlan < Zeus::Rails
  def secure_server
    require "rails/commands/server"

    server = ::Rails::Server.new
    server.options[:Port] = 3001
    server.options[:pid] = File.expand_path(File.join(::Rails.application.root, "tmp/pids/secure_server.pid"))

    Dir.chdir(::Rails.application.root)

    server.start do |s|
      s.ssl         = true
      s.ssl_options = {
        private_key_file: "ssl/server.key",
        cert_chain_file: "ssl/server.crt",
        verify_peer: false # verify the client? Check docs when wifi available to see if this is what this option means
      }
    end
  end
end

Zeus.plan = CustomPlan.new
