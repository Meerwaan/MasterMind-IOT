import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reglage");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastermind-IOT</h1>
        <h2>Retrouverez les codes couleurs et c'est gagné</h2>
        <h3>Vous avez 10 essais</h3>
        <button className="App-button" onClick={handleClick}>
          Jouer
        </button>
      </header>
    </div>
  );
}

export default Home;
