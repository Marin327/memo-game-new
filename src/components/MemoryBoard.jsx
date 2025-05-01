import React, { useState, useEffect } from "react";

// Символи за различни трудности
const SYMBOL_SETS = {
  easy: ["🍕", "🚀", "🎩", "🌟"],
  medium: ["🍕", "🚀", "🎩", "🌟", "🐱", "🎮", "🍎", "🐶"],
  hard: ["🍕", "🚀", "🎩", "🌟", "🐱", "🎮", "🍎", "🐶", "💡", "🦄", "🎲", "📦"],
};

// Разбъркване на тесте
const shuffleDeck = (symbols) => {
  const doubled = [...symbols, ...symbols];
  return doubled
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({
      id: index,
      symbol,
      matched: false,
    }));
};

function MemoryBoard({ setMoves, setIsWin, isRunning, difficulty }) {
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matchedSymbols, setMatchedSymbols] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);

  // При промяна на трудността – създаване на ново тесте
  useEffect(() => {
    const newDeck = shuffleDeck(SYMBOL_SETS[difficulty]);
    setDeck(newDeck);
    setFlipped([]);
    setMatchedSymbols([]);
  }, [difficulty]);

  // Победа – всички символи са съвпаднали
  useEffect(() => {
    if (
      SYMBOL_SETS[difficulty] &&
      matchedSymbols.length === SYMBOL_SETS[difficulty].length
    ) {
      setIsWin(true);
    }
  }, [matchedSymbols, difficulty, setIsWin]);

  const handleCardClick = (index) => {
    if (lockBoard || flipped.includes(index) || !isRunning) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setLockBoard(true);
      const [first, second] = newFlipped;

      if (deck[first].symbol === deck[second].symbol) {
        setMatchedSymbols((prev) => [...prev, deck[first].symbol]);
      }

      setTimeout(() => {
        setFlipped([]);
        setLockBoard(false);
      }, 800);

      setMoves((prev) => prev + 1);
    }
  };

  return (
    <div className="grid gap-4 justify-center mt-6"
      style={{
        gridTemplateColumns: `repeat(${getGridColumns(difficulty)}, minmax(70px, 1fr))`,
      }}
    >
      {deck.map((card, index) => {
        const isFlipped = flipped.includes(index);
        const isMatched = matchedSymbols.includes(card.symbol);

        return (
          <div
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`w-20 h-24 flex items-center justify-center text-2xl font-bold rounded shadow transition-all duration-300 cursor-pointer
              ${isMatched ? "bg-green-500 text-white" : isFlipped ? "bg-gray-300 text-black" : "bg-blue-600 text-transparent hover:bg-blue-500"}`}
          >
            {isFlipped || isMatched ? card.symbol : "❓"}
          </div>
        );
      })}
    </div>
  );
}

// Брой колони по трудност
function getGridColumns(difficulty) {
  if (difficulty === "easy") return 4;
  if (difficulty === "hard") return 6;
  return 4; // medium
}

export default MemoryBoard;
