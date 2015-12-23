import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="game-window">
        <div id="main-title"><h1 className="shadowed">Battleship!</h1></div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = App;
