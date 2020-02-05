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
    let body = {
      pins: 10,
      score: 0,
      frame: 0,
      spareBalls: 0,
      strikeBalls: 0,
      turn: 2,
      gameOver: false
    };

    $.ajax({
      url: "http://localhost:3001/api/games",
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(body),
      dataType: "json",
      context: this
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
