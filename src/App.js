
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './View/home/Home';
import Reglage from './View/setting/Reglage';

import ColorPicker from './View/game/ColorPicker';

import { useNavigate, Routes, Route } from "react-router-dom";

import Home from "./View/home/Home";
import Game from "./View/game/Game";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglage" element={<Reglage />} />
        <Route path="/game" element={<ColorPicker />} />
      </Routes>
    </div>
  );
}

export default App;
