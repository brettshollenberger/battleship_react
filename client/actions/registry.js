var gamesRegistry            = require("./games_registry.js"),
    joinGameRequestsRegistry = require("./join_game_requests_registry.js");

module.exports = {
  GAMES: gamesRegistry,
  JOIN_GAME_REQUESTS: joinGameRequestsRegistry
}
