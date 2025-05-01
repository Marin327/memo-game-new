// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MemoryBoard from "./components/MemoryBoard";
import ScorePanel from "./components/ScorePanel";
import Timer from "./components/Timer";
import WinMessage from "./components/WinMessage";
import ResetButton from "./components/ResetButton";
import DifficultySelector from "./components/DifficultySelector";

function App() {
  const [isRunning, setIsRunning] = useState(true);
  const [moves, setMoves] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [difficulty, setDifficulty] = useState("medium");

  const handleReset = () => {
    setIsWin(false);
    setMoves(0);
    setIsRunning(true);
  };

  const handleWin = () => {
    setIsWin(true);
    setIsRunning(false);

    // Автоматичен рестарт след 3 секунди (по избор)
    setTimeout(() => {
      handleReset();
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-black text-white">
      <Header />

      <main className="flex-grow p-6 flex flex-col items-center gap-4">
        <DifficultySelector setDifficulty={setDifficulty} />
        <ScorePanel moves={moves} />
        <Timer isRunning={isRunning} />

        <MemoryBoard
          setMoves={setMoves}
          setIsWin={handleWin}
          isRunning={isRunning}
          difficulty={difficulty}
        />

        <WinMessage isWin={isWin} />
        <ResetButton onReset={handleReset} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
