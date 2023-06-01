import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './View/home/Home';
import Reglage from './View/setting/Reglage';

import ColorPicker from './View/game/ColorPicker';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglage" element={<Reglage />} />
        <Route path="/game" element={<ColorPicker />} />
      </Routes>
    </BrowserRouter>
  );
}