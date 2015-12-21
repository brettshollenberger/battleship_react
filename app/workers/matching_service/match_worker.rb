module MatchingService
  class MatchWorker
    include Sidekiq::Worker

    def perform(ids)
    end
  end
end
