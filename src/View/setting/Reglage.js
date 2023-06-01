import React, { useState } from "react";
import "./Reglage.css";
import { useNavigate } from "react-router-dom";

function Reglage() {
  const navigate = useNavigate();
  const [pseudo, setPseudo] = useState("");

  const handleClick = () => {
    navigate(`/code/${pseudo}`);
  };

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastermind-IOT</h1>
        <h1>Nom du maître du jeu</h1>
        <input
          type="text"
          placeholder="Nom du maître du jeu"
          id="pseudo"
          value={pseudo}
          onChange={handlePseudoChange}
        />

        <button className="App-button" onClick={handleClick} disabled={!pseudo}>
          Débuter la partie
        </button>
      </header>
    </div>
  );
}

export default Reglage;
