import React from "react";

const SoundToggle = ({ muted, onToggle }) => (
  <button
    onClick={onToggle}
    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded text-sm"
  >
    {muted ? "🔇 Mute" : "🔊 Sound"}
  </button>
);

export default SoundToggle;
