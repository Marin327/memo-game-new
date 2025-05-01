// src/components/ResetButton.jsx
import React from "react";

function ResetButton({ onReset }) {
  return (
    <button
      onClick={onReset}
      className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg"
    >
      🔄 Рестарт
    </button>
  );
}

export default ResetButton;
