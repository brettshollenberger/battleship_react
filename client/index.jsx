import React from "react";
import ReactDOM from "react-dom";

require("./stores.js");
require("./gateways.js");

var App         = require("./components/app.jsx"),
    $           = require("jquery"),
    appSelector = document.querySelector("#app");

ReactDOM.render(<App />, appSelector);
