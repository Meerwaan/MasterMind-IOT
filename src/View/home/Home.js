import React from "react";
import "./Home.css";


function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mastermind-IOT</h1>
          <h2>Retrouverez les code couleur et c'est gagné</h2>
          <h3>Vous avez 10 essais</h3>
          <button className="App-button" >Jouer</button>
        </header>
      </div>
    );
  };

export default Home;
