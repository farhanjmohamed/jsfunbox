import rsb from "./Assets/roshambo.jpg";

export function Home() {
  return (
    <div className="w-screen h-auto min-h-screen bg-gradient-to-b from-yellow-400 via-purple-400 to-blue-500">
      <p className="text-gray-50 font-black text-center text-[15rem] pt-10 pb-5 animated-title-loop">
        GAMES
      </p>
      <div className="grid grid-cols-3 auto-rows-auto text-center pt-20 gap-10">
        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Rock Paper Scissors</p>
          <a href="/rps">
            <img src={rsb} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">
          Space Invaders
        </div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Flappy Bird</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">2048</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Sudoku</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Hello</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Connect 4</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Tic Tac Toe</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Minesweeper</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Match Em Up</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Snake</div>
        <div className="bg-white w-[25rem] h-[25rem] mx-auto">Breakout</div>
      </div>
    </div>
  );
}
