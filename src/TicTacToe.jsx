import { useEffect, useState } from "react";

export function TicTacToe() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [options, setOptions] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [status, setStatus] = useState("X's turn");
  const [running, setRunning] = useState(true);
  const [firstPickClicked, setFirstPickClicked] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  let count = 0;

  useEffect(() => {
    checkWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  const handleCellClick = (index) => {
    if (options[index] !== "" || !running) return;

    const newOptions = [...options];
    newOptions[index] = currentPlayer;
    setOptions(newOptions);
  };

  const checkWinner = () => {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (
        options[a] &&
        options[a] === options[b] &&
        options[a] === options[c]
      ) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      setStatus(`${currentPlayer} wins!`);
      setRunning(false);
    } else if (!options.includes("")) {
      setStatus("Draw!");
      setRunning(false);
    } else {
      changePlayer();
    }
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setStatus(`${currentPlayer === "X" ? "O" : "X"}'s turn`);
  };

  const handleRestart = () => {
    setOptions(Array(9).fill(""));
    setFirstPickClicked(false);
    setRunning(true);
  };

  return (
    <div className="h-auto min-h-screen w-screen bg-[#F8AD9D] p-2 pb-10">
      <a className="text-2xl font-black text-white pl-2" href="/games">
        Home
      </a>
      <div className="text-center font-black text-white text-[10rem] mt-10">
        Tic Tac Toe
      </div>
      <div
        id="statusText"
        className="text-center text-white mt-14 font-bold text-4xl"
      >
        {status}
      </div>
      {firstPickClicked || turnCount > 0 ? (
        ""
      ) : (
        <div className="text-center mt-5 flex justify-center gap-5">
          <p className="text-white font-bold">First Pick?</p>
          <button
            className="w-12 bg-white font-semibold rounded-sm"
            onClick={() => {
              setCurrentPlayer("X");
              setFirstPickClicked(true);
              setStatus("X's turn");
            }}
          >
            X
          </button>
          <button
            className="w-12 bg-white font-semibold rounded-sm"
            onClick={() => {
              setCurrentPlayer("O");
              setFirstPickClicked(true);
              setStatus("O's turn");
            }}
          >
            O
          </button>
        </div>
      )}
      <div className="mx-auto mt-10 grid grid-cols-3 grid-rows-3 w-[30rem] h-[30rem]">
        {options.map((cell, index) => (
          <div
            key={index}
            onClick={() => {
              handleCellClick(index);
              count++;
              console.log(count);
              setTurnCount(count);
            }}
            className="cell w-18 h-18 border-2 leading-[8rem] text-[8rem] flex items-center justify-center cursor-pointer bg-[#FFDAB9] font-bold text-white text-2xl"
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          id="restartBtn"
          onClick={() => {
            handleRestart();
            count = 0;
            setTurnCount(count);
          }}
          className="bg-[#FFDAB9] text-black px-4 py-2 rounded-md mt-10 font-bold"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
