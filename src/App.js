import { Routes, Route } from "react-router-dom";
import Home from "./View/home/Home";
import Reglage from "./View/setting/Reglage";

import ColorPicker from "./View/game/ColorPicker";
import Game from "./View/game/Game";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglage" element={<Reglage />} />
        <Route path="/code/:pseudo" element={<ColorPicker />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
