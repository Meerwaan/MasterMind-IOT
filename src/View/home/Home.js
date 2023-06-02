import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [leaderboardData, setLeaderboardData] = useState([]);

  const handleClick = () => {
    navigate("/reglage");
  };

  useEffect(() => {
    const savedData = localStorage.getItem("leaderboard");
    if (savedData) {
      setLeaderboardData(JSON.parse(savedData));
    }
  }, []);

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

      <div className="leaderBoard">
        <h2>LeaderBoard</h2>
        <table className="center">
          <thead>
            <tr>
              <th>Pseudo</th>
              <th>Trials</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.pseudo}</td>
                <td>{entry.trials}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
