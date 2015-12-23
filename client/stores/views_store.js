// View store manages the current view.
//
// It listens for particular events, and changes views as necessary.
//
var Dispatcher     = require("../dispatcher"),
    EventEmitter   = require("events").EventEmitter,
    GamesStore     = require("../stores/games_store.js"),
    assign         = require("object-assign"),
    _store         = {
      currentView: "",
      currentArgs: []
    };

var ViewsStore = assign({}, EventEmitter.prototype, {
  get: function(name) {
    return _store[name];
  },

  addListener: function(eventName, callback) {
    this.on(eventName, callback);
  },

  removeListener: function(eventName, callback) {
    this.removeListener(eventName, callback);
  },

  update: function(name) {
    _store.currentView = name;
    this.emit("UPDATED_VIEW", _store.currentView, _store.currentArgs);
  },

  updateArgs: function(args) {
    _store.currentArgs = args;
  }
});

Dispatcher.register(function(action) {
  switch(action.type) {
    case "CREATE_JOIN_GAME_REQUEST":
      ViewsStore.update("game_waiting_room");
      break;
  }
});

GamesStore.addListener("CLONED_GAME", (game) => {
  ViewsStore.updateArgs({id: game.id});
  ViewsStore.update("game");
});

module.exports = ViewsStore;
