module MatchingService
  class MatchWorker
    include Sidekiq::Worker

    def perform(ids)
      File.open("/tmp/cool", "a") { |f| f.puts ids }
    end
  end
end
