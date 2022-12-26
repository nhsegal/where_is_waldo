import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
