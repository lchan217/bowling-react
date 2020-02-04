import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Game extends Component {
  handleClick = () => {
    debugger;
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleClick}>Start New Game</Button>
      </div>
    );
  }
}

export default Game;
