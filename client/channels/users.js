var App = require("../app.js");

App.usersMessageStream = App.cable.subscriptions.create("UsersChannel", {
  received: function(data) {
    switch (data.title) {
      case "join_game":
        console.log("Join game! ID: " + data.id);
    }
  }
});
