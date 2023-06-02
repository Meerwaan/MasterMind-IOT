import React, { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import "./ColorPicker.css";
import mqtt from "precompiled-mqtt";

const ColorPicker = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [trials, setTrials] = useState(10);
  const [historique, setHistorique] = useState([]);

  useEffect(() => {
    mqttSub();
  }, []);
  const mqttConnect = () => {
    const client = mqtt.connect("mqtt://test.mosquitto.org:8080");
    console.log(client);
    setClient(client);
    return client;
  };

  const mqttSub = () => {
    const client = mqttConnect();

    client.subscribe("message", function (err) {});
    client.subscribe("result", function (err) {});
    client.on("message", function (topic, message) {
      switch (topic) {
        case "result":
          console.log(message.toString());

          var result = JSON.parse(message);
          if (result["result"] === false) {
            console.log("Vous avez perdu");
            console.log(result["tab"]);

            setTrials(trials - 1);
            setHistorique([...historique, result["tab"]]);

            if (trials === 0) {
              client.publish(
                "message",
                JSON.stringify({
                  tab: result["tab"],
                  result: true,
                })
              );
              console.log("c'est fini, vous avez perdu");
              alert("c'est fini, vous avez perdu");

              finish();
            }
          } else {
            if (result["result"] === true) {
              client.publish(
                "message",
                JSON.stringify({
                  tab: result["tab"],
                  result: true,
                })
              );

              console.log("Vous avez gagné");
              alert("Vous avez gagné");
              finish();
            }
          }
          break;
        default:
          console.log("No topic");
          break;
      }
    });
  };

  const finish = () => {
    navigate("/");
  };

  const colors = [1, 2, 0, 3];
  const [selectedColors, setSelectedColors] = useState([]);
  const [codeSaved, setCodeSaved] = useState(false);
  const localStorageKeyPrefix = "selectedColors_";

  const { pseudo } = useParams();
  const localStorageKey = localStorageKeyPrefix + pseudo;

  useEffect(() => {
    const storedColors = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedColors) {
      setSelectedColors(storedColors);
    }
  }, [localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(selectedColors));
  }, [selectedColors, localStorageKey]);

  const handleColorSelection = (color) => {
    if (selectedColors.length < 4 && !codeSaved) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleReset = () => {
    setSelectedColors([]);
    localStorage.removeItem(localStorageKey);
    setCodeSaved(false);
  };

  const handleSaveCode = () => {
    if (selectedColors.length === 4) {
      setCodeSaved(true);
      setSelectedColors([]);
    }

    client.publish(
      "message",
      JSON.stringify({
        tab: selectedColors,
        result: false,
      })
    );
  };

  return (
    <>
      {" "}
      <div className="color-picker">
        <div className="color-picker__rectangle">
          {colors.map((color) => (
            <button
              key={color}
              className={`color-picker__button${color} ${
                selectedColors.includes(color) ? "selected" : ""
              }`}
              onClick={() => handleColorSelection(color)}
            />
          ))}
        </div>
        <div className="color-picker__selected-colors">
          <p>Nombre d'essais restants : {trials}</p>
          <h2>Couleurs sélectionnées :</h2>
          {selectedColors.length > 0 ? (
            <ul>
              {selectedColors.map((color, index) => (
                <li key={index} className={`color-picker__button${color}`}></li>
              ))}
            </ul>
          ) : (
            <p>Aucune couleur sélectionnée.</p>
          )}
        </div>
        <div className="color-picker__buttons">
          <button className="App-button" onClick={handleReset}>
            Réinitialiser
          </button>
          <button
            className="App-button"
            onClick={handleSaveCode}
            disabled={codeSaved}
          >
            Valider
          </button>
        </div>
      </div>
      <div className="App">
        <h1>Historique</h1>
        <div className="ligne-ul">
          {historique.map((tableauInterne, index) => (
            <ul key={index} className="ligne-tableau">
              {tableauInterne.map((valeur, i) => (
                <li key={i} className={`color-picker__button${valeur}`}></li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
