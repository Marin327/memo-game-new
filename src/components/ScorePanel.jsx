// src/components/ScorePanel.jsx
import React from "react";

function ScorePanel({ moves }) {
  return (
    <div className="mb-4 text-xl">
      <p>🔁 Ходове: {moves}</p>
    </div>
  );
}

export default ScorePanel;
