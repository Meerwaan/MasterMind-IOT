import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './View/home/Home';
import Reglage from './View/reglage/Reglage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reglage" element={<Reglage />} />
      </Routes>
    </BrowserRouter>
  );
}