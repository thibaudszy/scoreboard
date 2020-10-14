import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Player from "./components/Player";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title />
      <Scoreboard />
    </div>
  );
}

export default App;
