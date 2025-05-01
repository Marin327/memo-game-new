import React from "react";

const ThemeSwitcher = ({ onToggle }) => (
  <button
    onClick={onToggle}
    className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-3 rounded text-sm"
  >
    🎨 Toggle Theme
  </button>
);

export default ThemeSwitcher;
