var Dispatcher     = require("../dispatcher"),
    EventEmitter   = require("events").EventEmitter,
    assign         = require("object-assign"),
    _store         = {
    };

var JoinGameRequestsStore = assign({}, EventEmitter.prototype, {
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
    case GamesConstants.CLONE:
      GamesStore.clone(action.attributes);
      GamesStore.emit(GamesConstants.CREATE);
  }
});

module.exports = GamesStore;

