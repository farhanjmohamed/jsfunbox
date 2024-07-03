import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Splash } from "./Splash";
import { Games } from "./Games";
import { Roshambo } from "./Roshambo";
import { TicTacToe } from "./TicTacToe";
import { GuessNum } from "./GuessNum";
import { TwentyFortyEight } from "./TwentyFortyEight";
import { MatchEmUp } from "./MatchEmUp";
import { SimonSays } from "./SimonSays";
import { WhackAMole } from "./WhackAMole";
import { Connect } from "./Connect";

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
          <Route path="/2048" element={<TwentyFortyEight />} />
          <Route path="/matchemup" element={<MatchEmUp />} />
          <Route path="/simonsays" element={<SimonSays />} />
          <Route path="/whackamole" element={<WhackAMole />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
