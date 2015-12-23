import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="game">
        <h1>{this.props.params.id}</h1>
      </div>
    )
  }
}

module.exports = Game;
