import logo from "./logo.svg";
import "./App.css";

import { useNavigate, Routes, Route } from "react-router-dom";

import Home from "./View/home/Home";
import Game from "./View/game/Game";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}
