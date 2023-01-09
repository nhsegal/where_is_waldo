import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import Times from "./components/Times";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Times" element={<Times />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
