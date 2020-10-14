import React from "react";

const Player = ({ name, score }) => {
  return (
    <div>
      <p>
        {name} {score}
      </p>
    </div>
  );
};

export default Player;
