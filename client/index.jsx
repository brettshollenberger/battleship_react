import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from 'react-router';
import history from "./history";

require("./stores.js");
require("./gateways.js");
require("./events.js");

var App             = require("./components/app.jsx"),
    GameLauncher    = require("./components/game_launcher/game_launcher.jsx"),
    GameWaitingRoom = require("./components/game_waiting_room/game_waiting_room.jsx"),
    Game            = require("./components/game/game.jsx"),
    $               = require("jquery"),
    appSelector     = document.querySelector("#app");

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={GameLauncher} />
      <Route path="waiting" component={GameWaitingRoom} />
      <Route path="games/:id" component={Game} />
    </Route>
  </Router>
), appSelector);
