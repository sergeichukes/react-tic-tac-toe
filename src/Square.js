import React from "react";
import "./index.css";

function Square(props) {
  const highlight = { backgroundColor: "#aaa" };
  const winner = { backgroundColor: "#94eb9b" };
  const withoutHighlight = { backgroundColor: "#ffff" };

  const selectColor = () => {
    return props.isWinner
      ? winner
      : props.isHighlight
      ? highlight
      : withoutHighlight;
  };

  return (
    <button className="square" onClick={props.onClick} style={selectColor()}>
      {props.value}
    </button>
  );
}

export default Square;
