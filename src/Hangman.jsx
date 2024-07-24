import { useState, useEffect } from "react";

export function Hangman() {
  const words = ["escape", "slide", "banana", "love", "beauty", "laser", "monkey", "juice", "indoor", "charge"];
  const [word, setWord] = useState("");
  const maxAttempts = 6;
  const [attempts, setAttempts] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const hangmanAscii = [
    `+----------+
 |         |
           |
           |
           |
           |
  ==========`,
    `+----------+
 |         |
 O         |
           |
           |
           |
  ==========`,
    `+----------+
 |         |
 O         |
 |         |
           |
           |
  ==========`,
    `+----------+
 |         |
 O         |
/|         |
           |
           |
  ==========`,
    `+----------+
 |         |
 O         |
/|\\        |
           |
           |
  ==========`,
    `+----------+
 |         |
 O         |
/|\\        |
/          |
           |
  ==========`,
    `+----------+
 |         |
 O         |
/|\\        |
/ \\        |
           |
  ==========`,
  ];

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) {
      alert("You already guessed that letter.");
      return;
    }
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
      setAttempts(attempts + 1);
    }
  };

  const renderWord = () => {
    return word.split("").map((letter, index) => (
      <span key={index} className="mx-1 text-2xl">
        {guessedLetters.includes(letter) ? letter : "_"}
      </span>
    ));
  };

  const renderButtons = () => {
    return alphabet.map((letter) => {
      let bgColor = "bg-gray-100 text-zinc-800";
      if (guessedLetters.includes(letter)) {
        if (word.includes(letter)) {
          bgColor = "bg-green-500 text-white";
        } else {
          bgColor = "bg-zinc-800 text-white";
        }
      }

      return (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          className={`m-1 p-2 rounded-md ${bgColor}`}
          disabled={guessedLetters.includes(letter) || isGameOver || isGameWon}
        >
          {letter.toUpperCase()}
        </button>
      );
    });
  };

  const isGameOver = attempts >= maxAttempts;
  const isGameWon = word.split("").every((letter) => guessedLetters.includes(letter));

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * words.length);
    setWord(words[randomNum]);
  }, []);

  return (
    <>
      <div className="w-screen h-auto min-h-screen bg-blue-200">
        <p className="font-black text-4xl pl-4 pt-2">
          <a href="/games">Home</a>
        </p>
        <p className="text-center font-black text-5xl text-zinc-950">Hangman</p>
        <div className="mt-20 flex flex-col items-center justify-center">
          <pre className="mb-10 text-2xl whitespace-pre">{hangmanAscii[attempts]}</pre>
          <div className="mb-10">{renderWord()}</div>
          <div>
            {isGameOver && <p className="text-red-600 font-bold">Game Over! The word was {word}.</p>}
            {isGameWon && <p className="text-green-600 font-bold">Congratulations! You guessed the word!</p>}
          </div>
          <div className="mb-10">
            <span className="text-zinc-950 font-bold">
              Attempts: {attempts}/{maxAttempts}
            </span>
          </div>
          <div className="mb-5">{renderButtons()}</div>

          <div>
            <button
              className="bg-zinc-800 w-16 rounded-lg text-white"
              onClick={() => {
                window.location.reload();
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
