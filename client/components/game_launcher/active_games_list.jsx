import React from "react";
import { Link } from "react-router";

class ActiveGamesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var links = _.map(this.props.games, function(game) {
      var url = `/games/${game.id}`

      return (
        <Link to={url}>
          {game.id}
        </Link>
      );
    });

    if (_.isEmpty(links)) {
      var content = (<h3>No Active Games</h3>);
    } else {
      var content = links
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

module.exports = ActiveGamesList;
