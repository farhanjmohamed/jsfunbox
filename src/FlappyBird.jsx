import { useState, useEffect, useRef } from "react";

export function FlappyBird() {
  const [topProp, setTopProp] = useState(200);
  const [isGameOver, setIsGameOver] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const [score, setScore] = useState(0);
  const [blockPassed, setBlockPassed] = useState(false);
  const characterRef = useRef(null);
  const blockRef = useRef(null);
  const holeRef = useRef(null);

  useEffect(() => {
    if (isGameOver) return;

    const character = characterRef.current;
    const block = blockRef.current;
    const hole = holeRef.current;

    const gravity = 0.5;
    const interval = setInterval(() => {
      const characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
      );
      const characterHeight = character.offsetHeight;
      const gameHeight = 500;

      setVelocity((v) => v + gravity);
      character.style.top = characterTop + velocity + "px";

      if (characterTop + characterHeight > gameHeight || characterTop < 0) {
        setIsGameOver(true);
        clearInterval(interval);
      }

      const blockLeft = parseInt(
        window.getComputedStyle(block).getPropertyValue("left")
      );
      const holeTop = parseInt(
        window.getComputedStyle(hole).getPropertyValue("top")
      );
      const holeHeight = hole.offsetHeight;
      const characterLeft = parseInt(
        window.getComputedStyle(character).getPropertyValue("left")
      );
      const characterWidth = character.offsetWidth;

      if (
        blockLeft < characterLeft + characterWidth &&
        blockLeft + block.offsetWidth > characterLeft
      ) {
        if (
          characterTop < holeTop ||
          characterTop + characterHeight > holeTop + holeHeight
        ) {
          setIsGameOver(true);
          clearInterval(interval);
        } else {
          setBlockPassed(true);
        }
      } else if (blockLeft + block.offsetWidth < characterLeft && blockPassed) {
        setScore((prevScore) => prevScore + 1);
        setBlockPassed(false);
      }
    }, 20);

    const handleSpacebarPress = (event) => {
      if (event.code === "Space") {
        jump();
      }
    };

    window.addEventListener("keydown", handleSpacebarPress);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleSpacebarPress);
    };
  }, [isGameOver, velocity, blockPassed]);

  const jump = () => {
    setVelocity(-8);
  };

  const resetGame = () => {
    setTopProp(200);
    setIsGameOver(false);
    setVelocity(0);
    setScore(0);
    setBlockPassed(false);
    const character = characterRef.current;
    character.style.top = "200px";
  };

  return (
    <div className="w-screen min-h-screen h-auto bg-purple-300">
      <p className="pl-2 pt-2 font-bold text-xl text-white">
        <a href="/games">Home</a>
      </p>
      <p className="font-extrabold text-5xl text-center text-yellow-200 pt-10">
        Flappy Bird
      </p>
      <p className="font-bold pt-5 text-3xl text-center text-white">
        Score: {score}
      </p>
      <div className="pt-20">
        <div
          id="game"
          className="w-[400px] h-[500px] border-2 mx-auto overflow-hidden relative"
        >
          <div
            id="block"
            ref={blockRef}
            className="animated-pipe w-[50px] h-[500px] left-[400px] absolute bg-black"
          ></div>
          <div
            id="hole"
            ref={holeRef}
            onAnimationIteration={() => {
              let random = Math.floor(Math.random() * 200) + 100;
              setTopProp(random);
            }}
            className={`animated-pipe w-[50px] h-[150px] bg-purple-300 absolute left-[400px]`}
            style={{ top: topProp + "px" }}
          ></div>
          <div
            id="character"
            ref={characterRef}
            className="absolute h-[20px] w-[20px] bg-red-500 top-[200px] left-[50px] rounded"
          ></div>
          {isGameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-2xl">
              <p>Game Over</p>
              <button
                onClick={resetGame}
                className="mt-4 px-4 py-2 bg-red-600 rounded"
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
