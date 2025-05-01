import React from "react";

const Modal = ({ show, onClose, score }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4">🎉 You Win!</h2>
        <p className="text-lg">Final Score: {score}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Modal;