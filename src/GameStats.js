import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import _ from "lodash";
import $ from "jquery";
import ScoreGrid from "./ScoreGrid";

class GameStats extends Component {
  constructor() {
    super();
    this.state = {
      pins: 10,
      score: 0,
      frame: 0,
      spareBalls: 0,
      strikeBalls: 0,
      turn: 2,
      gameOver: false,
      scoreHash: {}
    };
  }

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 2000);
  }

  handlePins = numPins => {
    let body = {
      numPins: numPins
    };
    $.ajax({
      url: "http://localhost:3001/api/games",
      type: "PUT",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(body),
      dataType: "json",
      context: this,
      success: function(results) {
        console.log(results);
      }
    });
  };

  showDropDown = () => {
    let numPins = this.state.pins;
    const items = _.times(numPins, i => (
      <Dropdown.Item onClick={() => this.handlePins(i + 1)} key={i + 1}>
        {i + 1}
      </Dropdown.Item>
    ));
    return (
      <Dropdown text='Pick A Number'>
        <Dropdown.Menu>{items}</Dropdown.Menu>
      </Dropdown>
    );
  };

  loadData = () => {
    $.ajax({
      url: "http://localhost:3001/api/games",
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      context: this,
      success: function(results) {
        this.setState({
          id: results.id,
          pins: results.pins,
          score: results.score,
          frame: results.frame,
          spareBalls: results.spareBalls,
          strikeBalls: results.strikeBalls,
          gameOver: results.game_over,
          scoreHash: results.score_hash
        });
      }
    });
  };

  render() {
    const { showDropDown } = this;

    return (
      <div>
        <h1>Total Score: </h1>
        <h4>How Many Pins To Knock Down: </h4>
        {showDropDown()}
        <h4>Score:</h4>
        <ScoreGrid scores={this.state.scoreHash} />
      </div>
    );
  }
}

export default GameStats;
