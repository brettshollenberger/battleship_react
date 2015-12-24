var Dispatcher = require("../dispatcher.js");

module.exports = {
  INDEX_GAME: function(args) {
    Dispatcher.dispatch({
      type: "INDEX_GAME",
      args: args
    });
  },
  CLONE_GAME: function(args) {
    Dispatcher.dispatch({
      type: "CLONE_GAME",
      args: args
    });
  }
}
