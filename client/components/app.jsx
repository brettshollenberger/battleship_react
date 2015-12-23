import React from "react";

var GameLauncher    = require("./game_launcher/game_launcher.jsx"),
    GameWaitingRoom = require("./game_waiting_room/game_waiting_room.jsx"),
    Game            = require("./game/game.jsx"),
    ViewsStore      = require("../stores/views_store.js");

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: "game_launcher"
    }

    ViewsStore.addListener("UPDATED_VIEW", this.updateView.bind(this));
  }

  updateView(currentView, currentArgs) {
    this.setState({currentView: currentView, currentArgs: currentArgs});
  }

  getCurrentView() {
    switch(this.state.currentView) {
      case "game_launcher":
        return <GameLauncher />
      case "game_waiting_room":
        return <GameWaitingRoom />
      case "game":
        return <Game id={this.state.currentArgs.id} />
    }
  }

  render() {
    return (
      <div id="game-window">
        <div id="main-title"><h1 className="shadowed">Battleship!</h1></div>
        {this.getCurrentView()}
      </div>
    )
  }
}

module.exports = App;
