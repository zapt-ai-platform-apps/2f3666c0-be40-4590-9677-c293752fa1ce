import React from 'react';

export default function StartModal({ onPlay, onExit }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to TIC-TAC-TOE BUT BETTER</h2>
        <div className="space-x-4">
          <button 
            onClick={onExit}
            className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
          >
            EXIT
          </button>
          <button 
            onClick={onPlay}
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
}