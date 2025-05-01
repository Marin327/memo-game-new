import React from "react";
import MemoryCard from "./MemoryCard";

const MemoryBoard = ({ cards, onCardClick }) => {
  return (
    <div className="grid grid-cols-4 gap-4 justify-center items-center p-4">
      {cards.map((card) => (
        <MemoryCard key={card.id} card={card} onClick={() => onCardClick(card)} />
      ))}
    </div>
  );
};

export default MemoryBoard;
