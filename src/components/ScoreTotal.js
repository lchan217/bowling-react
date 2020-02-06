import React from "react";

const ScoreTotal = props => {
  let total = 0;
  const { scores } = props;
  for (let frame in scores) {
    scores[frame] ? (total += scores[frame]) : (total = scores[frame]);
  }
  return <div>{total}</div>;
};

export default ScoreTotal;
