import React from "react";

const Player = ({ name, score, id, incrementScore }) => {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    incrementScore(id);
  };
  return (
    <div>
      <p>
        {name} {score}
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </div>
  );
};

export default Player;
