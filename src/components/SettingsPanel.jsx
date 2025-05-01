import React from "react";

const SettingsPanel = ({ difficulty, onDifficultyChange }) => (
  <div className="mb-4 text-white">
    <label className="mr-2">🎯 Difficulty:</label>
    <select
      className="bg-gray-700 text-white px-2 py-1 rounded"
      value={difficulty}
      onChange={(e) => onDifficultyChange(e.target.value)}
    >
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  </div>
);

export default SettingsPanel;