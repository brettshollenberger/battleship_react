import React from "react";
import { Link } from "react-router";

var ActionRegistry = require("../../actions/registry.js");

class FindAGameButton extends React.Component {
  constructor(props) {
    super(props);

    this.createJoinGameRequest = this.createJoinGameRequest.bind(this);
  }

  createJoinGameRequest() {
    ActionRegistry.JOIN_GAME_REQUESTS.CREATE_JOIN_GAME_REQUEST();
  }

  render() {
    return (
      <Link to="/waiting" onClick={this.createJoinGameRequest} className="btn find-game-btn pure-button pure-button-primary">
        Find A Game
      </Link>
    );
  }
}

module.exports = FindAGameButton;
