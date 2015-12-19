require "matching_machine/lpop_n"

class MatchingMachine
  class Matcher
    def match
      ids = LpopN.lpopn(2, "match_requests")

      if ids.any?
        MatchingService::MatchWorker.perform_async(ids)
      end
    end
  end
end
