module MatchingService
  class MatchWorker
    include Sidekiq::Worker

    def perform(player_ids)
      response = firebase_client.push("games", {
        player_ids: player_ids.inject({}) { |h, pid| h.tap { h[pid] = true } },
        state: "unstarted"
      })

      game_id = response.body["name"]

      player_ids.each do |player_id|
        alert_client_clone_game(player_id, player_ids, game_id)
        firebase_client.set("users/#{player_id}/games/#{game_id}", true) 
      end
    end

    def firebase_client
      BattleshipReact::Application::FIREBASE_CLIENT
    end

    def alert_client_clone_game(player_id, player_ids, game_id)
      ActionCable.server.broadcast(
        "users_#{player_id}", 
        resource_type: "game",
        action: "clone",
        args: {
          id: game_id,
          player_ids: player_ids,
          state: "unstarted"
        },
        session_id: player_id
      )
    end
  end
end
