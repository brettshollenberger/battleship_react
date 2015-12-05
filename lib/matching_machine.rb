require "matching_machine/matcher"

class MatchingMachine
  attr_accessor :wpids

  # Build autoscaling if necessary
  #
  def run
    self.wpids = 2.times.map do
      run_constant
    end
  end

  def run_constant
    fork do
      loop do
        Matcher.new.match
        sleep 0.2
      end
    end
  end
end
