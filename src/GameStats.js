import React, { Component } from "react";
import { Grid, Dropdown } from "semantic-ui-react";
import _ from "lodash";
import $ from "jquery";

class GameStats extends Component {
  constructor() {
    super();
    this.state = {
      pins: 10,
      score: {},
      frame: 0,
      spareBalls: 0,
      strikeBalls: 0,
      turn: 2,
      gameOver: false
    };
  }

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 2000);
  }

  handlePins = numPins => {
    $.ajax({
      url: "http://localhost:3001/api/games",
      type: "PUT",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(numPins),
      dataType: "json"
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
      success: function(results) {
        console.log(results);
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
        <h4>Score: </h4>
        <Grid>
          <Grid.Column key={1}>1</Grid.Column>
          <Grid.Column key={2}>2</Grid.Column>
          <Grid.Column key={3}>3</Grid.Column>
          <Grid.Column key={4}>4</Grid.Column>
          <Grid.Column key={5}>5</Grid.Column>
          <Grid.Column key={6}>6</Grid.Column>
          <Grid.Column key={7}>7</Grid.Column>
          <Grid.Column key={8}>8</Grid.Column>
          <Grid.Column key={9}>9</Grid.Column>
          <Grid.Column key={10}>10</Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default GameStats;
