import React from "react";

const Scoreboard = ({ score, attempts }) => (
  <div className="flex justify-between text-white text-lg mb-4">
    <span>✅ Score: {score}</span>
    <span>🔁 Attempts: {attempts}</span>
  </div>
);

export default Scoreboard;