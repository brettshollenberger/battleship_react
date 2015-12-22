import React from "react";
import ReactDOM from "react-dom";

require("./gateways/incoming.js");
require("./gateways/outgoing.js");

var App         = require("./components/app.jsx"),
    $           = require("jquery"),
    appSelector = document.querySelector("#app");

ReactDOM.render(<App />, appSelector);
