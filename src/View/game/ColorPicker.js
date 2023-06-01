import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
  const colors = ["red", "blue", "green", "yellow"];
  const [selectedColors, setSelectedColors] = useState([]);

  const handleColorSelection = (color) => {
    if (selectedColors.length < 4) {
      setSelectedColors([...selectedColors, color]);
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
      <button className="App-button">
        Valider
      </button>
    </div>
  );
};

export default ColorPicker;
