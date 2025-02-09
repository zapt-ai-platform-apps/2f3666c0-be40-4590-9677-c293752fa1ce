import React from 'react';

export default function GameOverModal({ onRestart, onExit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">You lost!</h2>
        <div className="space-x-4">
          <button 
            onClick={onRestart}
            className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          >
            RESTART
          </button>
          <button 
            onClick={onExit}
            className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
          >
            EXIT
          </button>
        </div>
      </div>
    </div>
  );
}