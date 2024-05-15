import { useState } from "react";

export function FlappyBird() {
  const [topProp, setTopProp] = useState("-500px");

  return (
    <div className="w-screen min-h-screen h-auto bg-purple-300">
      <div
        id="game"
        className="w-[400px] h-[500px] border-2 mx-auto overflow-hidden"
      >
        <div
          id="block"
          className="animated-pipe w-[50px] h-[500px] left-[400px] relative bg-none"
        ></div>
        <div
          id="hole"
          onAnimationIteration={() => {
            const random = Math.floor(Math.random() * 300) + 150;
            setTopProp(`${random}px`);
            console.log(topProp);
          }}
          className={`animated-pipe w-[50px] h-[150px] bg-white relative left-[400px] top-[${topProp}]`}
        ></div>
        <div id="character"></div>
      </div>
    </div>
  );
}
