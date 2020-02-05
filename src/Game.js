import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import GameStats from "./GameStats";
import $ from "jquery";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      showStats: false
    };
  }

  handleClick = () => {
    $.ajax({
      url: "http://localhost:3001/api/games",
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    });

    this.setState({ showStats: true });
  };

  showStats = () => {
    if (this.state.showStats) {
      return (
        <div>
          <GameStats />
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Start New Game</Button>
        {this.showStats()}
      </div>
    );
  }
}

export default Game;
