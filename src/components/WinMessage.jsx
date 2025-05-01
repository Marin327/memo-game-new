// src/components/WinMessage.jsx
import React from "react";

function WinMessage({ isWin }) {
  if (!isWin) return null;
  return (
    <div className="bg-green-600 text-white text-xl p-4 rounded-lg mt-6 shadow-lg animate-bounce">
      🎉 Поздравления! Спечели!
    </div>
  );
}

export default WinMessage;
