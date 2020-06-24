import React from "react";
import Part from "./Part.js";

const Content = (props) => {
  return props.parts.map((part) => {
    return (
      <div>
        <Part part={part.name} exercise={part.exercises} />
      </div>
    );
  });
};

export default Content;
