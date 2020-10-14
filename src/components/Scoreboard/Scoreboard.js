import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  // =============================================================================
  // Players array
  // =============================================================================
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  // =============================================================================
  // Function declarations
  // =============================================================================
  function compare_score(player_a, player_b) {
    return player_b.score - player_a.score;
  }
  function compare_name(player_a, player_b) {
    const name_a = player_a.name.toUpperCase();
    const name_b = player_b.name.toUpperCase();
    if (name_a < name_b) {
      return -1;
    }
    if (name_a > name_b) {
      return 1;
    }
    return 0;
  }
  // change sorting of the players----------------------------------------------------
  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };

  // Defining the callback function to increment the score:--------------------------
  const incrementScore = (id) => {
    const newPlayers = [...players].map((player) => {
      if (player.id === id) {
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    set_players(newPlayers);
  };
  // Set score function---------------------------------------------------------------------------
  const setScore = (num) => {
    set_players(
      [...players].map((player) => {
        return !isNaN(num)
          ? { ...player, score: num }
          : { ...player, score: num() };
      })
    );
  };

  // Reset function---------------------------------------------------------------------------
  const reset = () => {
    setScore(0);
  };
  // Randomize function---------------------------------------------------------------------------
  const randomize = () => {
    const generateRandom0_100 = () => {
      return Math.round(Math.random() * 100);
    };
    setScore(generateRandom0_100);
  };

  // -----------------------------------------------------------------------------
  // sorting the players
  // -----------------------------------------------------------------------------

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  // =======================================================================
  // returning the component
  // =======================================================================
  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={reset}> Reset score</button>
        <button onClick={randomize}> Randomize score</button>
      </p>
      <h1>Scoreboard</h1>
      {players_sorted.map((myPlayer) => {
        const { id, name, score } = myPlayer;
        console.log(myPlayer);
        return (
          <Player
            key={id}
            id={id}
            name={name}
            score={score}
            incrementScore={incrementScore}
          />
        );
      })}
      <AddPlayerForm />
    </div>
  );
}