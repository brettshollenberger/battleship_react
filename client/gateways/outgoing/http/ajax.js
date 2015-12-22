var $          = require("jquery"),
    assign     = require("object-assign"),
    AUTH_TOKEN = $('meta[name=csrf-token]').attr('content');

module.exports = function(args) {
  $.ajax(assign(args, {
    headers: {
      "X-CSRF-TOKEN": AUTH_TOKEN
    }
  }));
}
