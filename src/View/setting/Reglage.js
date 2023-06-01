import React from "react";
import './Reglage.css';
import { useNavigate } from 'react-router-dom';




function Reglage () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/game');
    }
    return (
        <>
      <div className="App">
        <header className="App-header">
          <h1>Mastermind-IOT</h1>
          <h1>Nom du maitre du jeu </h1>
            <input type="text" placeholder="Nom du maitre du jeu" />

            <button className="App-button" onClick={handleClick} >Debuter la partie</button>

          
        </header>
      </div>
      </>
    );
  };

export default Reglage;
