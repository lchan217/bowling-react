import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import GameStats from "./GameStats";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      showStats: false
    };
  }

  handleClick = () => {
    fetch("http://localhost:3001/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
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
