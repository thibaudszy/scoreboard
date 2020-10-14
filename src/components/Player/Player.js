import React from "react";
import "./Player.scss";

const Player = ({ name, score, id, incrementScore }) => {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    incrementScore(id);
  };
  return (
    <li className="Player">
      <div className="percentage_coloring" style={{ width: score + "%" }} />
      <p>
        {name} (score: {score})
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
};

export default Player;
