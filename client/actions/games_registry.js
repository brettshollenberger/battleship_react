var Dispatcher = require("../dispatcher.js");

module.exports = {
  CLONE_GAME: function(args) {
    Dispatcher.dispatch({
      type: "CLONE_GAME",
      args: args
    });
  }
}
