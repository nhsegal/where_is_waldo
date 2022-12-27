import React from "react";

function FaceLabel(props) {
  const myComponentStyle = {
    top: `${props.y}px`,
    left: `${props.x - 50}px`,
    position: 'absolute'
  };
  return (
   <div style={myComponentStyle} data-name={`${props.name}`}>{`${props.name}`}</div>
  );
}

export default FaceLabel;