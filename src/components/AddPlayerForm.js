import React, { useState } from "react";

const AddPlayerForm = (props) => {
  const [newPlayer, setnewPlayer] = useState("");

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => {
            setnewPlayer(event.target.value);
          }}
        />{" "}
        <button onClick={() => props.addPlayer(newPlayer)}>Add</button>
      </p>
    </div>
  );
};

export default AddPlayerForm;
