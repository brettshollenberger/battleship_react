require("activesupport");

var App            = require("../../../app.js"),
    Log            = require("./log.js"),
    ActionRegistry = require("../../../actions/registry.js");

App.cable.subscriptions.create("UsersChannel", {
  connected: function() {
    this.perform("request_seed_data");
  },
  received: function(data) {
    Log(this, data);
    this[`receive${data.action.titleize()}${data.resource_type.titleize()}`](data.args);
  },
  receiveIndexGame: function(args) {
    ActionRegistry.GAMES.INDEX_GAME(args);
  },
  receiveCloneGame: function(args) {
    ActionRegistry.GAMES.CLONE_GAME(args);
  }
});
