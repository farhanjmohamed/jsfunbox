import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Splash } from "./Splash";
import { Home } from "./Home";
import { Roshambo } from "./Roshambo";
import { TicTacToe } from "./TicTacToe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<Home />} />
          <Route path="/" element={<Splash />} />
          <Route path="/rps" element={<Roshambo />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
