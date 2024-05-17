export function SpaceInvaders() {
  return (
    <div className="w-screen min-h-screen h-auto bg-slate-800">
      <p className="text-white font-extrabold pl-2 pt-2 text-2xl">
        <a href="/games">Home</a>
      </p>
      <h1 className="text-[7rem] text-center text-white pt-10 font-black">
        Space Invaders
      </h1>
      <div id="game window"></div>
    </div>
  );
}
