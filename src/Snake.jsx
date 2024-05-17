import { useEffect, useRef, useState } from "react";

export function Snake() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [direction, setDirection] = useState(null);
  const [snake, setSnake] = useState([{ x: 9 * 32, y: 10 * 32 }]);
  const [food, setFood] = useState({
    x: Math.floor(Math.random() * 17 + 1) * 32,
    y: Math.floor(Math.random() * 15 + 3) * 32,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const box = 32;

    document.addEventListener("keydown", handleKeyDown);

    const gameInterval = setInterval(() => {
      if (!gameOver) {
        draw(context, box);
      }
    }, 100);

    return () => {
      clearInterval(gameInterval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, food, direction, gameOver]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 65 && direction !== "RIGHT") setDirection("LEFT");
    if (event.keyCode === 87 && direction !== "DOWN") setDirection("UP");
    if (event.keyCode === 68 && direction !== "LEFT") setDirection("RIGHT");
    if (event.keyCode === 83 && direction !== "UP") setDirection("DOWN");
  };

  const draw = (context, box) => {
    context.fillStyle = "#20232a";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    for (let i = 0; i < snake.length; i++) {
      context.fillStyle = i === 0 ? "#4caf50" : "#8bc34a";
      context.fillRect(snake[i].x, snake[i].y, box, box);
      context.strokeStyle = "#fff";
      context.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    context.fillStyle = "#fc0303";
    context.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "LEFT") snakeX -= box;
    if (direction === "UP") snakeY -= box;
    if (direction === "RIGHT") snakeX += box;
    if (direction === "DOWN") snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * 17 + 1) * box,
        y: Math.floor(Math.random() * 15 + 3) * box,
      });
    } else {
      snake.pop();
    }

    let newHead = { x: snakeX, y: snakeY };

    if (
      snakeX < 0 ||
      snakeX >= 19 * box ||
      snakeY < 0 ||
      snakeY >= 19 * box ||
      collision(newHead, snake)
    ) {
      setGameOver(true);
    } else {
      setSnake([newHead, ...snake]);
    }
  };

  const collision = (head, array) => {
    for (let i = 0; i < array.length; i++) {
      if (head.x === array[i].x && head.y === array[i].y) {
        return true;
      }
    }
    return false;
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setDirection(null);
    setSnake([{ x: 9 * 32, y: 10 * 32 }]);
    setFood({
      x: Math.floor(Math.random() * 17 + 1) * 32,
      y: Math.floor(Math.random() * 15 + 3) * 32,
    });
  };

  return (
    <div className="w-screen min-h-screen h-auto bg-purple-500">
      <p className="text-white font-bold pl-2 text-2xl">
        <a href="/games">Home</a>
      </p>
      <h1 className="text-center pt-5 font-extrabold text-white text-[7rem]">
        Snake
      </h1>
      <div className="flex justify-center pt-10">
        <canvas
          ref={canvasRef}
          className="border border-white"
          width="608"
          height="608"
        ></canvas>
      </div>
      <p className="text-white text-center pt-5 text-2xl">Score: {score}</p>
      {gameOver && (
        <div className="text-center pt-5">
          <button
            onClick={resetGame}
            className="bg-white text-purple-500 font-bold py-2 px-4 mb-10 rounded"
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
}
