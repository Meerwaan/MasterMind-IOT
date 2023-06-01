import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ColorPicker.css";

const ColorPicker = () => {
  const colors = ["red", "blue", "green", "yellow"];
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
      console.log(`Pseudo: ${pseudo} | Code couleur: ${selectedColors.join(", ")}`);
    }
  };

  return (
    <div className="color-picker">
      <div className="color-picker__rectangle">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-picker__button ${
              selectedColors.includes(color) ? "selected" : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelection(color)}
          />
        ))}
      </div>
      <div className="color-picker__selected-colors">
        <h2>Couleurs sélectionnées :</h2>
        {selectedColors.length > 0 ? (
          <ul>
            {selectedColors.map((color, index) => (
              <li key={index} style={{ backgroundColor: color }}>
                {color}
              </li>
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
        <button className="App-button" onClick={handleSaveCode} disabled={codeSaved}>
          Valider
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
