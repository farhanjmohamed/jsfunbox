import React, { useState } from "react";

export function GuessNum() {
  const [tries, setTries] = useState(6);
  const [targetNum] = useState(Math.floor(Math.random() * 100) + 1);
  const [hint, setHint] = useState("");
  const [guess, setGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("");

  console.log(targetNum);
  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const reloadPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  const checkGuess = () => {
    if (guess !== "") {
      let newTries = tries - 1;
      setTries(newTries);

      if (newTries <= 0) {
        setGameStatus("You Lose!");
        reloadPage();
        return;
      }

      if (Number(guess) === targetNum) {
        setGameStatus("You Win!");
        setHint(`${targetNum}`);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setHint(targetNum > Number(guess) ? "⬆️" : "⬇️");
      }
    } else {
      console.log("Enter a value, please!");
    }
  };

  return (
    <>
      <div className="w-screen min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl font-black text-center mb-10">
          GUESS THE NUMBER!
        </h1>
        <h3 className="mb-2">{gameStatus || `Tries left: ${tries}`}</h3>
        <div className="p-5 flex items-center justify-center mb-4 w-[10rem] h-[10rem]">
          <h3 className="text-center text-[5rem]">{hint}</h3>
        </div>
        <div className="text-center">
          <label>Enter your guess!</label>
          <br />
          <input
            type="text"
            className="mt-2 p-2 border-2 border-sky-500 rounded-md w-36 h-7 text-center text-black font-semibold"
            value={guess}
            onChange={handleGuessChange}
          />
          <br />
          <button
            className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            onClick={checkGuess}
            disabled={gameStatus !== ""}
          >
            Guess
          </button>
        </div>
      </div>
    </>
  );
}
