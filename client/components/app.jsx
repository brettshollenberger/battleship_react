import React from "react";

var CreateJoinGameRequestButton = require("./join_game_requests/create_join_game_request_button.jsx");

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreateJoinGameRequestButton />
      </div>
    )
  }
}

module.exports = App;

