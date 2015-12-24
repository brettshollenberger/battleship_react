require("activesupport");

var App    = require("../../../app.js"),
    _      = require("lodash"),
    moment = require("moment");

// A channel is a message router--route the
// received message to the function by the
// same name.
//
class GenericChannel {
  constructor(name, options) {
    var channel = this;

    _.extend(channel, options);

    var sub = App.cable.subscriptions.create(channel.constructor.name, {
      subscribed: function() {
                   console.log(1);
        debugger;
      },
      // Messages on channels are structured like:
      //
      // resource_type: game
      // action: "create"
      // args: { id: 1, player_ids: [2, 3] }
      //
      received: function(data) {
        var resourceType = data.resource_type.titleize(),
            action       = data.action.titleize(),
            methodName   = `receive${action}${resourceType}`,
            args         = data.args,
            timestamp    = moment().format('hh:mm:ss');

        if (_.isFunction(channel[methodName])) {
          console.log(`${timestamp} : ${channel.constructor.name} called with ${methodName}`);
          channel[methodName](args);
        } else {
          console.log(`${timestamp} :${channel.constructor.name} doesn't respond to ${methodName}`);
        }
      }
    });

    if (_.isFunction(channel.afterInitialize)) { channel.afterInitialize(); }
    debugger;
  }
}

module.exports = function(channel, serverMessage) {;
  var resourceType = serverMessage.resource_type.titleize(),
      action       = serverMessage.action.titleize(),
      methodName   = `receive${action}${resourceType}`,
      args         = serverMessage.args,
      timestamp    = moment().format('hh:mm:ss');

  if (_.isFunction(channel[methodName])) {
    console.log(`${timestamp} : ${channel.constructor.name} called with ${methodName}`);
    channel[methodName](args);
  } else {
    console.log(`${timestamp} :${channel.constructor.name} doesn't respond to ${methodName}`);
  }
}
