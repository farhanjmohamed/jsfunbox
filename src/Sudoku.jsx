import { useState } from "react";

const initialBoard = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
];

export function Sudoku() {
  const [board, setBoard] = useState(initialBoard);

  const handleChange = (row, col, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const newBoard = board.map((r, i) =>
        r.map((c, j) => (i === row && j === col ? (value === "" ? null : parseInt(value)) : c))
      );
      setBoard(newBoard);
    }
  };

  const isValid = (board) => {
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === null) continue;
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        if (rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || boxes[boxIndex].has(board[r][c])) {
          return false;
        }
        rows[r].add(board[r][c]);
        cols[c].add(board[r][c]);
        boxes[boxIndex].add(board[r][c]);
      }
    }
    return true;
  };

  const resetBoard = () => {
    setBoard(initialBoard);
  };

  return (
    <div className="w-screen h-auto min-h-screen">
      <a className="text-2xl font-black pl-2 pt-2" href="/games">
        Home
      </a>
      <p className="text-center text-5xl font-black pt-10 pb-10">Sudoku</p>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="grid grid-cols-9 gap-1">
          {board.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <input
                key={`${rowIndex}-${colIndex}`}
                type="text"
                value={cell === null ? "" : cell}
                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                className="w-12 h-12 text-center border-2 border-gray-400 focus:border-blue-500"
              />
            ))
          )}
        </div>
        <div className="mt-4">
          {isValid(board) ? (
            <span className="text-green-500">Board is valid!</span>
          ) : (
            <span className="text-red-500">Board is invalid!</span>
          )}
        </div>
        <button onClick={resetBoard} className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-zinc-700">
          Reset
        </button>
      </div>
    </div>
  );
}
