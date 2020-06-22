import React from "react";

const Total = (props) => {
  return (
    <p>
      Number of exercises: {props.exercises.exercises1 + props.exercises.exercises2 + props.exercises.exercises3}
    </p>
  );
};

export default Total;
