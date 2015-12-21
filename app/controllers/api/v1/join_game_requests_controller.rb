module API
  module V1
    class JoinGameRequestsController < ApplicationController
      def create
        unless session_id.present?
          render unauthenticated
        else
          enqueue_request
          ok
        end
      end

      def enqueue_request
        Redis.current.with do |conn|
          conn.rpush("match_requests", session_id)
        end
      end
    end
  end
end
