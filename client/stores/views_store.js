// View store manages the current view.
//
// It listens for particular events, and changes views as necessary.
//
var Dispatcher     = require("../dispatcher"),
    EventEmitter   = require("events").EventEmitter,
    assign         = require("object-assign"),
    _store         = {
      currentView: ""
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
    this.emit("UPDATED_VIEW", _store.currentView);
  }
});

Dispatcher.register(function(action) {
  switch(action.type) {
    case "CREATE_JOIN_GAME_REQUEST":
      ViewsStore.update("game_waiting_room");
  }
});

module.exports = ViewsStore;
