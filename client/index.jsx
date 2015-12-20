import React from "react";
import ReactDOM from "react-dom";

var App = require("./app.js");

App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    console.log("GOT DAT MESSAG DAWG");
    console.log(data.message);
  }
});

// "<p><b>[#{data.username}]:</b> #{data.message}</p>"

// var App       = require("./components/app.jsx");
// var appObject = document.querySelector("#app");

// ReactDOM.render(<App />, appObject);
