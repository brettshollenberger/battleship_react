var Dispatcher = require("../dispatcher.js");

module.exports = {
  CREATE_GAME: function(args) {
    Dispatcher.dispatch({
      type: "CREATE_GAME",
      args: args
    });
  }
}
