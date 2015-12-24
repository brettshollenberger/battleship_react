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

  // Create an index of the known games, request them
  // from the server as necessary.
  //
  index: function(options) {
    _.each(_.keys(options.index), (key) => {
      if (_.isUndefined(_store.games[key])) {
        _store.games[key] = {
          id: key,
          loading: true
        }
      }
    });

    this.emit("INDEXED_GAME");
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
      break;
    case "INDEX_GAME":
      GamesStore.index(action.args);
      break;
  }
});

module.exports = GamesStore;
