import React from "react";

var FindAGameButton = require("./find_a_game_button.jsx"),
    ActiveGamesList = require("./active_games_list.jsx"),
    GamesStore      = require("../../stores/games_store.js");

class GameLauncher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: GamesStore.get("games")
    }

    GamesStore.addListener("CLONED_GAME", (game) => {
      this.setState({ games: GamesStore.get("games") });
    });

    GamesStore.addListener("INDEXED_GAME", () => {
      this.setState({ games: GamesStore.get("games") });
    });
  }

  render() {
    return (
      <div id="game-launcher">
        <FindAGameButton />
        <ActiveGamesList games={this.state.games} />
      </div>
    )
  }
}

module.exports = GameLauncher;
