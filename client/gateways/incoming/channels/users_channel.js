require("activesupport");

var App            = require("../../../app.js"),
    Log            = require("./log.js"),
    ActionRegistry = require("../../../actions/registry.js");

// A channel is a message router--route the
// received message to the function by the
// same name.
//
// class UsersChannel extends GenericChannel {
//   receiveCloneGame(args) {
//   }
// }

// new GenericChannel("UsersChannel", {
//   afterInitialize: () => {
//   },

//   receiveCloneGame: (args) => {
//     ActionRegistry.GAMES.CLONE_GAME(args);
//   }
// });

// App.cable.subscriptions.create("UsersChannel", {
//   received: function(data) {
//     var resourceType = data.resource_type.camelize(),
//         action       = data.action.camelize(),
//         methodName   = `${action}${resourceType.titleize()}`,
//         args         = data.args,
//         timestamp    = moment().format('hh:mm:ss');

//     if (_.isFunction(channel[methodName])) {
//       console.log(`${timestamp} : ${channel.constructor.name} called with ${methodName}`);
//       channel[methodName](args);
//     } else {
//       console.log(`${timestamp} :${channel.constructor.name} doesn't respond to ${methodName}`);
//     }
//   }
// });
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
