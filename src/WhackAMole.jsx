import { useState, useEffect } from "react";

export function WhackAMole() {
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);
  const [activeMole, setActiveMole] = useState(null);
  const [missedClicks, setMissedClicks] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (missedClicks >= 3) {
      setGameOver(true);
      return;
    }

    const interval = setInterval(() => {
      const newMoles = Array(9).fill(false);
      const randomIndex = Math.floor(Math.random() * 9);
      newMoles[randomIndex] = true;
      setMoles(newMoles);
      setActiveMole(randomIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [missedClicks]);

  const handleWhack = (index) => {
    if (gameOver) return;

    if (index === activeMole) {
      setScore(score + 1);
      const newMoles = Array(9).fill(false);
      setMoles(newMoles);
      setActiveMole(null);
    } else {
      setMissedClicks(missedClicks + 1);
    }
  };

  const resetGame = () => {
    setMoles(Array(9).fill(false));
    setScore(0);
    setActiveMole(null);
    setMissedClicks(0);
    setGameOver(false);
  };

  return (
    <>
      <div className="w-screen h-auto min-h-screen bg-[#77614E]">
        <a href="/games" className="font-bold text-2xl pl-4 pt-2 text-gray-50">
          Home
        </a>
        <p className="mt-20 font-black text-center text-5xl text-gray-50">Whack A Mole</p>
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="grid grid-cols-3 gap-4">
            {moles.map((isActive, index) => (
              <div
                key={index}
                className={`w-24 h-24 flex items-center justify-center border-2 ${
                  isActive ? "bg-zinc-600" : "bg-gray-100"
                }`}
                onClick={() => handleWhack(index)}
              >
                {isActive && <div className="text-white text-5xl">🐻</div>}
              </div>
            ))}
          </div>
          <div className="text-gray-50 mt-6 text-2xl">
            Score: <span className="font-bold">{score}</span>
          </div>
          <div className="text-gray-50 mt-2 text-xl">
            Missed Clicks: <span className="font-bold">{missedClicks}</span>
          </div>
          {gameOver && <div className="mt-6 text-3xl text-red-600 font-bold">Game Over!</div>}
          <button className="mt-4 px-4 py-2 bg-zinc-600 text-white rounded" onClick={resetGame}>
            {gameOver ? "Restart Game" : "Reset Game"}
          </button>
        </div>
      </div>
    </>
  );
}
