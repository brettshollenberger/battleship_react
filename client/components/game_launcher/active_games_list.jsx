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
        <Link to={url} key={game.id}>
          {game.id}
        </Link>
      );
    });

    var title, content;

    if (_.isEmpty(links)) {
      title   = <h3>No Active Games</h3>;
      content = "";
    } else {
      title   = <h3>Your Games</h3>;
      content = links
    }

    return (
      <div>
        {title}
        {content}
      </div>
    );
  }
}

module.exports = ActiveGamesList;
