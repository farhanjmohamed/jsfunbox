import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Splash } from "./Splash";
import { Games } from "./Games";
import { Roshambo } from "./Roshambo";
import { TicTacToe } from "./TicTacToe";
import { GuessNum } from "./GuessNum";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/" element={<Splash />} />
          <Route path="/rps" element={<Roshambo />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/guessthenumber" element={<GuessNum />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
