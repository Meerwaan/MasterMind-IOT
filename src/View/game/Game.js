import React, { useEffect, useState } from "react";

import "./Game.css";

function Game() {
  const [trials, setTrials] = useState(10);
  const [code, setCode] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const handleColorClick = (color) => {
    if (code.length === 4) {
      return;
    }
    setCode([...code, color]);
  };

  var player = JSON.parse(localStorage.getItem("player"));
  useState(() => {
    setPlayerName(player.pseudo);
  }, []);

  return (
    <div className="home">
      <h3>Code couleur</h3>
      <div className="code">
        {code.map((color, index) => (
          <div
            key={index}
            className={`code ${index + 1}`}
            style={{ color: color }}
          >
            {color}
          </div>
        ))}
      </div>
      <h1>Mastermind-IOT</h1>
      <p>Bonjour {playerName}</p>
      <h3>Vous avez 10 essais</h3>
      <h2>Retrouverez le code couleur et c'est gagné</h2>

      <button className="button blue" onClick={() => handleColorClick("Blue")}>
        Bleu
      </button>
      <button className="button red" onClick={() => handleColorClick("Red")}>
        Rouge
      </button>
      <button
        className="button green"
        onClick={() => handleColorClick("Green")}
      >
        Vert
      </button>
      <button
        className="button yellow"
        onClick={() => handleColorClick("Yellow")}
      >
        Jaune
      </button>

      <button onClick={console.log("coucou")}>Valider</button>
      <button onClick={() => setCode([])}>Effacer</button>
    </div>
  );
}

export default Game;
