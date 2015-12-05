# Lpop N elements from a Redis queue
#
class LpopN
  class << self
    def script
      <<-LUA
        local last_keys
        last_keys = redis.call('lrange', KEYS[1], ARGV[1], ARGV[2])
        redis.call('ltrim', KEYS[1], ARGV[3], ARGV[4])
        return last_keys
      LUA
    end

    def lpopn(n = 2, keyname)
      keyname = keyname.to_s

      return if keyname.empty?

      keys = Redis.current.with do |conn|
        conn.eval(script , keys: [keyname], argv: [0, n-1, n, -1])
      end

      if keys.length < n
        keys.each do |key|
          Redis.current.with do |conn|
            conn.lpush("match_requests", key)
          end
        end

        return []
      end

      return keys
    end
  end
end
