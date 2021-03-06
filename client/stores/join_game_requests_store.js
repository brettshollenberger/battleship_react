var Dispatcher     = require("../dispatcher"),
    ActionRegistry = require("../actions/registry.js"),
    EventEmitter   = require("events").EventEmitter,
    assign         = require("object-assign"),
    moment         = require("moment"),
    _store         = {
      requests: []
    };

var JoinGameRequestsStore = assign({}, EventEmitter.prototype, {
  create: function(args) {
    _store.requests.push({timestamp: moment().format("MM/DD/YYYY - hh:mm:ss")});
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
    case "CREATE_JOIN_GAME_REQUEST":
      JoinGameRequestsStore.create(action.args);
      JoinGameRequestsStore.emit("CREATED_JOIN_GAME_REQUEST", action.args);
  }
});

module.exports = JoinGameRequestsStore;
