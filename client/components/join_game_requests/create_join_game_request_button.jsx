import React from "react";

var ActionRegistry = require("../../actions/registry.js");

class CreateJoinGameRequestButton extends React.Component {
  constructor(props) {
    super(props);

    this.createJoinGameRequest = this.createJoinGameRequest.bind(this);
  }

  createJoinGameRequest() {
    ActionRegistry.JOIN_GAME_REQUESTS.CREATE_JOIN_GAME_REQUEST();
  }

  render() {
    return <button onClick={this.createJoinGameRequest} className="add-game-btn pure-button pure-button-primary">Find A Game!</button>;
  }
}

module.exports = CreateJoinGameRequestButton;

