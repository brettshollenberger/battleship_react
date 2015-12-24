var App            = require("../../../app.js"),
    Firebase       = require("firebase"),
    GamesStore     = require("../../../stores/games_store.js"),
    ActionRegistry = require("../../../actions/registry.js");

GamesStore.addListener("INDEXED_GAME", (id) => {
  var gameListener = new Firebase(`${App.firebase_url}/games/${id}`)

  gameListener.on("value", (snapshot) => {
    snapshot = snapshot.val();
    snapshot = _.extend({id: id}, snapshot);

    ActionRegistry.GAMES.UPDATE_GAME(snapshot);
  });
});

module.exports = true;
