require("activesupport");

var App    = require("../../../app.js"),
    _      = require("lodash"),
    moment = require("moment");

// A channel is a message router--route the
// received message to the function by the
// same name.
//
class GenericChannel {
  constructor() {
    var channel = this;

    App.cable.subscriptions.create(channel.constructor.name, {
      // Messages on channels are structured like:
      //
      // resource_type: game
      // action: "create"
      // args: { id: 1, player_ids: [2, 3] }
      //
      received: function(data) {
        var resourceType = data.resource_type.camelize(),
            action       = data.action.camelize(),
            methodName   = `${action}${resourceType.titleize()}`,
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
  }
}

module.exports = GenericChannel;
