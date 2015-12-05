require "connection_pool"

REDIS_TIMEOUT              = (ENV["BATTLESHIP_REDIS_TIMEOUT"] || 5).to_i
REDIS_CONNECT_TIMEOUT      = (ENV["BATTLESHIP_REDIS_CONNECT_TIMEOUT"] || 5).to_i
REDIS_CONNECTION_POOL_SIZE = (ENV["BATTLESHIP_REDIS_CONNECTION_POOL_SIZE"] || 30).to_i
REDIS_URL                  = URI.parse(ENV["REDIS_URL"] || "redis://127.0.0.1:6379/0")

Redis.current = REDIS_POOL = ConnectionPool.new(size: REDIS_CONNECTION_POOL_SIZE, timeout: REDIS_TIMEOUT) do
  Redis.new(host: REDIS_URL.host, port: REDIS_URL.port, timeout: REDIS_TIMEOUT, connect_timeout: REDIS_CONNECT_TIMEOUT)
end
