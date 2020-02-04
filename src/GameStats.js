import React, { Component } from "react";
import { Grid, Dropdown } from "semantic-ui-react";

class GameStats extends Component {
  render() {
    return (
      <div>
        <h1>Total Score: </h1>
        <h4>How Many Pins To Knock Down: </h4>
        <h4>
          Score:{" "}
          <Dropdown text='Pick A Number'>
            <Dropdown.Menu>
              <Dropdown.Item text='1' />
              <Dropdown.Item text='2' />
              <Dropdown.Item text='3' />
            </Dropdown.Menu>
          </Dropdown>
        </h4>
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
