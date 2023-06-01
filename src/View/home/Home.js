import React from "react";
import "./Home.css";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    const player = {
      pseudo: document.querySelector("input").value,
      score: 0,
    };
    localStorage.setItem("player", JSON.stringify(player));
    navigate("/game");
  };

  const leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
  return (
    <div className="App">
      <header className="App-header">
        <h3>Leaderboard</h3>
        <div className="leaderboard">
          <div className="leaderboard__player">
            <div className="leaderboard__player__name">Player 1</div>
            <div className="leaderboard__player__score">Score: 0</div>
          </div>
          <div className="leaderboard__player">
            <div className="leaderboard__player__name">Player 2</div>
            <div className="leaderboard__player__score">Score: 0</div>
          </div>
        </div>
        <h1>Mastermind-IOT</h1>
        <input
          type="text"
          style={{
            marginBottom: "20px",
            width: "200px",
            height: "30px",
            fontSize: "20px",
          }}
          placeholder="Entrez votre pseudo"
        />

        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "4px",
            fontSize: "18px",
            cursor: "pointer",
            width: "200px",
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
          }}
          onClick={handleClick}
        >
          Jouer
        </button>
      </header>
    </div>
  );
}

export default Home;
