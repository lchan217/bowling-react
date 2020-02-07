import React from "react";
import { Grid } from "semantic-ui-react";
import _ from "lodash";

const ScoreGrid = props => {
  const { scores } = props;
  const columns = _.times(10, i => (
    <Grid.Column key={i + 1}>
      Frame {i + 1}: <br />
      {scores[i + 1]}
    </Grid.Column>
  ));
  return (
    <div>
      <h3>Scores</h3>
      <Grid>{columns}</Grid>
    </div>
  );
};

export default ScoreGrid;
