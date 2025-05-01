import React from "react";

function Card({ card, index, onClick, isFlipped, isMatched }) {
  return (
    <div
      className={`w-20 h-20 flex justify-center items-center bg-gray-800 text-white text-3xl rounded-lg cursor-pointer ${
        isFlipped || isMatched ? "bg-gray-500" : "bg-gray-800"
      }`}
      onClick={() => onClick(index)}
    >
      {isFlipped || isMatched ? card.symbol : "❓"}
    </div>
  );
}

export default Card;