import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple intervals
    timerRef.current = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Reset the ref
  };

  const resetTimer = () => {
    stopTimer(); // Stop the timer
    setElapsedTime(0); // Reset time
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Stopwatch</h1>
      <h2 className="text-6xl font-mono text-blue-500 mb-8">{elapsedTime}s</h2>
      <div className="flex space-x-4">
        <button
          onClick={startTimer}
          className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
