var Dispatcher   = require("../dispatcher"),
    EventEmitter = require("events").EventEmitter,
    assign       = require("object-assign"),
    _            = require("lodash"),
    _store       = {
      games: {}
    };

var GamesStore = assign({}, EventEmitter.prototype, {
  clone: function(game) {
    if (_.isUndefined(_store.games[game.id])) {
      _store.games[game.id] = game;

      this.emit("CLONED_GAME", game);
    }
  },

  get: function(name) {
    return _store[name];
  },

  addListener: function(eventName, callback) {
    this.on(eventName, callback);
  },

  removeListener: function(eventName, callback) {
    this.removeListener(eventName, callback);
  }
});

Dispatcher.register(function(action) {
  switch(action.type) {
    case "CLONE_GAME":
      GamesStore.clone(action.args);
  }
});

module.exports = GamesStore;
