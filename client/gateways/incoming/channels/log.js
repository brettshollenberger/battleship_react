require("activesupport");

var App    = require("../../../app.js"),
    _      = require("lodash"),
    moment = require("moment");

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
