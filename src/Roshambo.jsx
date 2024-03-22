import { useState } from "react";

export function Roshambo() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const choices = ["👊", "✋", "✌️"];

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a draw!";
    } else if (
      (player === "👊" && computer === "✌️") ||
      (player === "✌️" && computer === "✋") ||
      (player === "✋" && computer === "👊")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  };

  const handlePlayerChoice = (choice) => {
    const computer = generateComputerChoice();
    const gameResult = determineWinner(choice, computer);

    setPlayerChoice(choice);
    setResult(gameResult);
  };

  return (
    <div className="bg-green-400 w-screen min-h-screen h-auto">
      <a href="/games" className="font-bold pl-5 pt-5 text-2xl">
        Home
      </a>
      <p
        className="text-[8rem] font-black text-center text-gray-50 pt-28
      "
      >
        ROCK PAPER SCISSORS
      </p>
      <div className="mx-auto text-center pt-[5rem] w-[50rem] h-[50rem] ">
        <div className="text-[8rem] space-x-[4rem] pb-10">
          {choices.map((choice) => (
            <button key={choice} onClick={() => handlePlayerChoice(choice)}>
              {choice}
            </button>
          ))}
        </div>
        <p className="text-4xl">You: {playerChoice}</p>
        <p className="text-4xl">Computer: {computerChoice}</p>
        <p className="text-[5rem]">{result}</p>
      </div>
    </div>
  );
}
