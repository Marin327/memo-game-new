// src/components/Timer.jsx
import React, { useEffect, useState } from "react";

function Timer({ isRunning }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return <p>⏱ Време: {seconds}s</p>;
}

export default Timer;
