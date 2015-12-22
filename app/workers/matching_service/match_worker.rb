module MatchingService
  class MatchWorker
    include Sidekiq::Worker

    def perform(player_ids)
      p "Received player_ids #{player_ids}"

      response = firebase_client.push("games", {
        players: player_ids,
        state: "unstarted"
      })

      game_id = response.body["name"]

      player_ids.each do |player_id|
        alert_client(player_id, game_id)
      end
    end

    def firebase_client
      BattleshipReact::Application::FIREBASE_CLIENT
    end

    def alert_client(player_id, game_id)
      ActionCable.server.broadcast(
        "users_#{player_id}", 
        title: "join_game",
        id: game_id,
        session_id: player_id
      )
    end
  end
end
