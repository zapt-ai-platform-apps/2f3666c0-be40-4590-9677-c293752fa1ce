import React, { useState } from 'react';
import StartModal from './StartModal';
import TicTacToe from './TicTacToe';
import GameOverModal from './GameOverModal';

export default function App() {
  const [gameState, setGameState] = useState('menu'); // 'menu', 'game', 'lost', 'exit'

  const handleExit = () => {
    console.log("Exit triggered");
    try {
      window.close();
    } catch (error) {
      console.error("Failed to close window:", error);
    }
    setGameState('exit');
  };

  const renderContent = () => {
    if (gameState === 'exit') {
      return (
        <div className="flex items-center justify-center h-full">
          <h1 className="text-2xl font-bold">Goodbye!</h1>
        </div>
      );
    }
    if (gameState === 'menu') {
      return <StartModal onPlay={() => { console.log("PLAY clicked, switching to game state"); setGameState('game'); }} onExit={handleExit} />;
    }
    if (gameState === 'game') {
      return <TicTacToe onWin={() => { console.log("User won or game drawn, returning to menu"); setGameState('menu'); }} onLose={() => { console.log("User lost, showing game over modal"); setGameState('lost'); }} />;
    }
    if (gameState === 'lost') {
      return <GameOverModal onRestart={() => { console.log("Restarting game"); setGameState('game'); }} onExit={handleExit} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <div className="flex-grow">
        {renderContent()}
      </div>
      <footer className="p-2 text-center">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}