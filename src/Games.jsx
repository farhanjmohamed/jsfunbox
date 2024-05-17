import rps from "./Assets/rps.png";
import ttt from "./Assets/tictactoe.png";
import gtn from "./Assets/guessnum.png";
import flappybird from "./Assets/frappyburd.png";
import invader from "./Assets/invader.png";
import twen from "./Assets/2048.png";
import connect from "./Assets/connect4.png";
import sud from "./Assets/sudoku.png";
import snek from "./Assets/snake.png";

export function Games() {
  return (
    <div className="w-screen h-auto min-h-screen bg-gradient-to-b from-yellow-400 via-purple-400 to-blue-500">
      <p className="text-gray-50 font-black text-center text-[15rem] pt-10 pb-5 animated-title-loop">
        GAMES
      </p>
      <div className="grid grid-cols-3 auto-rows-auto text-center p-20 gap-20">
        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Rock Paper Scissors</p>
          <a href="/rps">
            <img src={rps} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Space Invaders</p>
          <a href="">
            <img src={invader} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Flappy Bird</p>
          <a href="/flappybird">
            <img src={flappybird} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>
        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">2048</p>
          <a href="/2048">
            <img src={twen} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Sudoku</p>
          <a href="">
            <img src={sud} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>
        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Doodle Jump</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Connect 4</p>
          <a href="">
            <img src={connect} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>
        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Tic Tac Toe</p>
          <a href="/tictactoe">
            <img src={ttt} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Minesweeper</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Match Em Up</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Snake</p>
          <a href="/snake">
            <img src={snek} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Breakout</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Candy Crush</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Black Jack</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Dino Run</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>

        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Pong</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>
        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Guess The Number</p>
          <a href="/guessthenumber">
            <img src={gtn} className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>
        <div className="border-red-400 bg-white border-8 rounded-xl w-[25rem] h-[25rem] mx-auto">
          <p className="text-2xl font-black pt-5 pb-5">Whack A Mole</p>
          <a href="">
            <img className="h-60 w-auto mx-auto pb-5" />
          </a>
        </div>
      </div>
      <div className="p-2 w-screen bg-purple-400 text-center font-bold text-2xl text-gray-50">
        <a href="/">Splash</a>
      </div>
    </div>
  );
}
