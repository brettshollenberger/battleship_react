var Dispatcher = require("../dispatcher.js");

module.exports = {
  CREATE_JOIN_GAME_REQUEST: function(args) {
    Dispatcher.dispatch({
      type: "CREATE_JOIN_GAME_REQUEST",
      args: args
    });
  },
  CREATED_JOIN_GAME_REQUEST: function(args) {
    Dispatcher.dispatch({
      type: "CREATED_JOIN_GAME_REQUEST",
      args: args
    });
  }
}
