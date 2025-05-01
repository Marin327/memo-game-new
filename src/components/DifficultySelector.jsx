import React from "react";

const DifficultySelector = ({ setDifficulty }) => {
  return (
    <div className="mb-4">
      <label className="mr-2 font-semibold">Трудност:</label>
      <select
        onChange={(e) => setDifficulty(e.target.value)}
        className="bg-gray-800 text-white p-2 rounded"
      >
        <option value="easy">Лесно (4x2)</option>
        <option value="medium">Средно (4x4)</option>
        <option value="hard">Трудно (6x4)</option>
      </select>
    </div>
  );
};

export default DifficultySelector;
