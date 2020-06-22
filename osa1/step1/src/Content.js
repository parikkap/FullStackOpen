import React from "react";
import Part from "./Part.js";

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.part1} exercise={props.exercises.exercises1} />
      <Part part={props.parts.part2} exercise={props.exercises.exercises2} />
      <Part part={props.parts.part3} exercise={props.exercises.exercises3} />
    </div>
  );
};

export default Content;
