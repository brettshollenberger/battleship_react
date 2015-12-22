var Dispatcher     = require ("../../../dispatcher.js"),
    ActionRegistry = require("../../../actions/registry.js"),
    $              = require("jquery"),
    AUTH_TOKEN     = $('meta[name=csrf-token]').attr('content');

var JoinGameRequestsHttp = {
  createJoinGameRequest: function(args) {
    $.ajax({
      type: "POST",
      url: "/api/v1/join_game_requests",
      headers: {
        "X-CSRF-Token": AUTH_TOKEN
      }
    });
  }
};

Dispatcher.register(function(action) {
  switch(action.type) {
    case "CREATE_JOIN_GAME_REQUEST":
      JoinGameRequestsHttp.createJoinGameRequest(action.args);
  }
});

module.exports = JoinGameRequestsHttp;
