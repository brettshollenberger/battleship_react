var JoinGameRequestsStore = require("../../../stores/join_game_requests_store.js"),
    ActionRegistry        = require("../../../actions/registry.js"),
    ajax                  = require("./ajax.js");

var JoinGameRequestsHttp = {
  createJoinGameRequest: function(args) {
    ajax({
      type: "POST",
      url: "/api/v1/join_game_requests"
    });
  }
};

JoinGameRequestsStore.addListener("CREATED_JOIN_GAME_REQUEST", JoinGameRequestsHttp.createJoinGameRequest)

module.exports = JoinGameRequestsHttp;
