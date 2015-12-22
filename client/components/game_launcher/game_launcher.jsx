import React from "react";

var FindAGameButton = require("./find_a_game_button.jsx");

class GameLauncher extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="game-launcher">
        <FindAGameButton />
      </div>
    )
  }
}

module.exports = GameLauncher;

