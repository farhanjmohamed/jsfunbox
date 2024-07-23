import { useState, useEffect } from "react";

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export function MatchEmUp() {
  const initialCards = [
    { id: 1, value: "🍎", matched: false },
    { id: 2, value: "🍎", matched: false },
    { id: 3, value: "🍌", matched: false },
    { id: 4, value: "🍌", matched: false },
    { id: 5, value: "🍇", matched: false },
    { id: 6, value: "🍇", matched: false },
    { id: 7, value: "🍒", matched: false },
    { id: 8, value: "🍒", matched: false },
    { id: 9, value: "🥝", matched: false },
    { id: 10, value: "🥝", matched: false },
    { id: 11, value: "🍍", matched: false },
    { id: 12, value: "🍍", matched: false },
    { id: 13, value: "🍋‍🟩", matched: false },
    { id: 14, value: "🍋‍🟩", matched: false },
    { id: 15, value: "🫐", matched: false },
    { id: 16, value: "🫐", matched: false },
  ];

  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.value === secondCard.value) {
        setCards((prevCards) =>
          prevCards.map((card) => (card.value === firstCard.value ? { ...card, matched: true } : card))
        );
        setMatches(matches + 1);
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards]);

  const handleCardClick = (card) => {
    if (selectedCards.length < 2 && !selectedCards.includes(card) && !card.matched) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  return (
    <>
      <div className="w-screen h-auto min-h-screen bg-gray-300">
        <a href="/games" className="font-black text-4xl pl-5  text-gray-50">
          Home
        </a>
        <p className="text-center font-bold text-5xl pb-10 pt-5 text-blue-600">Match Em Up</p>
        <div className="grid grid-cols-4 gap-y-1 space-x-0 gap-x-0 w-[25rem] mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-md cursor-pointer ${
                selectedCards.includes(card) || card.matched ? "bg-green-500" : "bg-blue-500"
              }`}
              onClick={() => handleCardClick(card)}
            >
              <span className="text-2xl text-white">
                {selectedCards.includes(card) || card.matched ? card.value : "?"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xl text-center text-blue-600 pt-5">Matches: {matches}</p>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-blue-500 text-white w-16 rounded-xl text-center"
            onClick={() => {
              setCards(shuffleArray(initialCards));
              setMatches(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
