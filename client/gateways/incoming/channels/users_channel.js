var App            = require("../../../app.js"),
    GenericChannel = require("./generic_channel.js"),
    ActionRegistry = require("../../../actions/registry.js");

// A channel is a message router--route the
// received message to the function by the
// same name.
//
class UsersChannel extends GenericChannel {
  cloneGame(args) {
    ActionRegistry.GAMES.CLONE_GAME(args);
  }
}

App.usersChannel = new UsersChannel;
