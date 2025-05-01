import React from "react";

const RestartButton = ({ onRestart }) => (
  <button
    onClick={onRestart}
    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded shadow"
  >
    🔄 Restart
  </button>
);

export default RestartButton;