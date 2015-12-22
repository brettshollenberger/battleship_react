import React from "react";

class GameWaitingRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ellipses: ""
    }

    this.interval = setInterval(() => {
      var ellipses = "";

      if (this.state.ellipses == "...") {
        ellipses = "";
      } else {
        ellipses = this.state.ellipses + ".";
      }

      this.setState({ellipses: ellipses});
    }, 700);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    var text = `Looking for game ${this.state.ellipses}`

    return (
      <div>
        <h2 className="centered white">
          {text}
        </h2>
      </div>
    )
  }
}

module.exports = GameWaitingRoom;
