import { useState, useEffect } from "react";

const SIZE = 4;

const generateEmptyGrid = () => {
  return Array(SIZE)
    .fill(null)
    .map(() => Array(SIZE).fill(0));
};

const addRandomTile = (grid) => {
  const emptyCells = [];
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (grid[i][j] === 0) emptyCells.push([i, j]);
    }
  }
  if (emptyCells.length === 0) return grid;

  const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  grid[x][y] = Math.random() < 0.9 ? 2 : 4;
  return grid;
};

const moveGrid = (grid, direction) => {
  const newGrid = generateEmptyGrid();
  let moved = false;

  const move = (x, y, dx, dy) => {
    while (
      x + dx >= 0 &&
      x + dx < SIZE &&
      y + dy >= 0 &&
      y + dy < SIZE &&
      grid[x + dx][y + dy] === 0
    ) {
      grid[x + dx][y + dy] = grid[x][y];
      grid[x][y] = 0;
      x += dx;
      y += dy;
      moved = true;
    }
    return [x, y];
  };

  const combine = (x, y, dx, dy) => {
    if (
      x + dx >= 0 &&
      x + dx < SIZE &&
      y + dy >= 0 &&
      y + dy < SIZE &&
      grid[x][y] !== 0 &&
      grid[x][y] === grid[x + dx][y + dy]
    ) {
      grid[x + dx][y + dy] *= 2;
      grid[x][y] = 0;
      moved = true;
    }
  };

  const traverse = (dx, dy) => {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const [x, y] =
          dx === 1 ? [SIZE - 1 - i, j] : dy === 1 ? [i, SIZE - 1 - j] : [i, j];
        move(x, y, dx, dy);
        combine(x, y, dx, dy);
        move(x, y, dx, dy);
      }
    }
  };

  switch (direction) {
    case "up":
      traverse(-1, 0);
      break;
    case "down":
      traverse(1, 0);
      break;
    case "left":
      traverse(0, -1);
      break;
    case "right":
      traverse(0, 1);
      break;
    default:
      break;
  }

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      newGrid[i][j] = grid[i][j];
    }
  }

  return moved ? addRandomTile(newGrid) : grid;
};

const getTileColor = (value) => {
  switch (value) {
    case 2:
      return "bg-yellow-400";
    case 4:
      return "bg-yellow-500";
    case 8:
      return "bg-yellow-600";
    case 16:
      return "bg-yellow-700";
    case 32:
      return "bg-yellow-800";
    case 64:
      return "bg-yellow-900";
    case 128:
      return "bg-red-400";
    case 256:
      return "bg-red-500";
    case 512:
      return "bg-red-600";
    case 1024:
      return "bg-red-700";
    case 2048:
      return "bg-red-800";
    default:
      return "bg-gray-300";
  }
};

export function TwentyFortyEight() {
  const [grid, setGrid] = useState(generateEmptyGrid);

  const resetGame = () => {
    setGrid(addRandomTile(addRandomTile(generateEmptyGrid())));
  };

  useEffect(() => {
    resetGame();
  }, []);

  const handleKeyDown = (e) => {
    let newGrid;
    switch (e.key) {
      case "ArrowUp":
        newGrid = moveGrid(grid, "up");
        break;
      case "ArrowDown":
        newGrid = moveGrid(grid, "down");
        break;
      case "ArrowLeft":
        newGrid = moveGrid(grid, "left");
        break;
      case "ArrowRight":
        newGrid = moveGrid(grid, "right");
        break;
      default:
        return;
    }
    setGrid(newGrid);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [grid]);

  return (
    <div className="w-screen h-auto min-h-screen bg-pink-300">
      <a href="/games" className="font-black text-2xl pl-2 pt-2 text-white">
        Home
      </a>
      <h1 className="text-[8rem] font-extrabold text-white text-center">
        2048
      </h1>
      <button
        onClick={resetGame}
        className="block mx-auto mt-4 mb-4 px-6 py-3 bg-white text-pink-300 font-bold text-2xl rounded-md"
      >
        Restart
      </button>
      <div className="border-[10px] border-white bg-gray-200 h-[40rem] w-[40rem] mx-auto mt-4 grid grid-cols-4 grid-rows-4 gap-2 p-2">
        {grid.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div
              key={`${rowIndex}-${cellIndex}`}
              className={`border-4 border-white flex items-center justify-center text-4xl font-bold w-full h-full ${getTileColor(
                cell
              )}`}
            >
              {cell || ""}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
