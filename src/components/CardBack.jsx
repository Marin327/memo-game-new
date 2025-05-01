import React from "react";

const CardBox = ({ card, onClick }) => {
  return (
    <div
      className={`w-24 h-32 flex items-center justify-center rounded shadow-md cursor-pointer text-2xl font-bold transition duration-300 ${
        card.isFlipped || card.isMatched
          ? "bg-green-500 text-white"
          : "bg-gray-300 text-transparent"
      }`}
      onClick={onClick}
    >
      {card.value}
    </div>
  );
};

export default CardBox;
