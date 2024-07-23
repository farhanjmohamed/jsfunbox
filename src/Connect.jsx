import { useState } from "react";

const ROWS = 6;
const COLS = 7;

export function Connect() {
  const [board, setBoard] = useState(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState("Red");
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    const directions = [
      { x: 1, y: 0 }, // horizontal
      { x: 0, y: 1 }, // vertical
      { x: 1, y: 1 }, // diagonal right-down
      { x: 1, y: -1 }, // diagonal right-up
    ];

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const player = newBoard[row][col];
        if (player) {
          for (let { x, y } of directions) {
            let win = true;
            for (let k = 1; k < 4; k++) {
              const newRow = row + k * y;
              const newCol = col + k * x;
              if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS || newBoard[newRow][newCol] !== player) {
                win = false;
                break;
              }
            }
            if (win) return player;
          }
        }
      }
    }
    return null;
  };

  const handleClick = (col) => {
    if (winner) return;

    const newBoard = board.map((row) => row.slice());
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        break;
      }
    }

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === "Red" ? "Yellow" : "Red");
    }
    setBoard(newBoard);
  };

  const resetGame = () => {
    setBoard(Array.from({ length: ROWS }, () => Array(COLS).fill(null)));
    setCurrentPlayer("Red");
    setWinner(null);
  };

  return (
    <div className="w-screen h-auto min-h-screen bg-zinc-800">
      <a href="/games" className="text-red-500 font-black text-3xl pt-2 pl-4">
        Home
      </a>
      <p className="text-center font-black text-red-500 text-5xl">Connect 4</p>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-7 gap-1 mt-20">
          {Array.from({ length: COLS }).map((_, colIndex) => (
            <button
              key={colIndex}
              onClick={() => handleClick(colIndex)}
              className="w-12 h-12 bg-red-500 text-white font-bold text-xl"
            >
              ▼
            </button>
          ))}
        </div>
        <div className="grid grid-rows-6 gap-1 mt-2 border border-white p-2 ">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-7 gap-1">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${
                    cell === "Red" ? "bg-red-500" : cell === "Yellow" ? "bg-yellow-300" : "bg-gray-100"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
        {winner && <div className="mt-6 text-2xl font-bold text-gray-50">Winner: {winner}</div>}
        <button onClick={resetGame} className="mt-6 px-4 py-2 bg-red-500 text-white rounded">
          Reset Game
        </button>
      </div>
    </div>
  );
}
