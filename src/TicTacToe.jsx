import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import { checkWinner, getAIMove } from './gameLogic';

export default function TicTacToe({ onWin, onLose }) {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [isBoardDisabled, setIsBoardDisabled] = useState(false);

  const handleUserMove = (index) => {
    try {
      if (board[index] || isBoardDisabled) return;
      const newBoard = board.slice();
      newBoard[index] = 'X';
      setBoard(newBoard);
      console.log("User moved at index", index);
      const result = checkWinner(newBoard);
      if (result) {
        if (result === 'X' || result === 'draw') {
          console.log("User wins or game is a draw");
          onWin();
          return;
        } else if (result === 'O') {
          console.log("AI wins");
          onLose();
          return;
        }
      }
      setIsBoardDisabled(true);
      setTimeout(() => {
        aiMove(newBoard);
      }, 500);
    } catch (error) {
      console.error("Error in handleUserMove:", error);
      Sentry.captureException(error);
    }
  };

  const aiMove = (currentBoard) => {
    try {
      const randomIndex = getAIMove(currentBoard);
      if (randomIndex === null) {
        console.log("Board is full, game is a draw");
        onWin();
        return;
      }
      const newBoard = currentBoard.slice();
      newBoard[randomIndex] = 'O';
      setBoard(newBoard);
      console.log("AI moved at index", randomIndex);
      const result = checkWinner(newBoard);
      if (result) {
        if (result === 'O') {
          console.log("AI wins, user loses");
          onLose();
          return;
        } else if (result === 'X' || result === 'draw') {
          console.log("User wins or game is a draw after AI move");
          onWin();
          return;
        }
      }
      setIsBoardDisabled(false);
    } catch (error) {
      console.error("Error in aiMove:", error);
      Sentry.captureException(error);
    }
  };

  const renderCell = (index) => (
    <button
      key={index}
      onClick={() => handleUserMove(index)}
      disabled={!!board[index] || isBoardDisabled}
      className="w-20 h-20 border border-gray-500 text-3xl font-bold cursor-pointer"
    >
      {board[index]}
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-1">
        {board.map((cell, idx) => renderCell(idx))}
      </div>
    </div>
  );
}