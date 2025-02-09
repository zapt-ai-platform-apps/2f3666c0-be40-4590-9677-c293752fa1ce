export function checkWinner(newBoard) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
      return newBoard[a];
    }
  }
  if (newBoard.every(cell => cell)) {
    return 'draw';
  }
  return null;
}

export function getAIMove(currentBoard) {
  const emptyIndices = currentBoard
    .map((cell, idx) => (cell === '' ? idx : null))
    .filter(val => val !== null);
  if (emptyIndices.length === 0) {
    return null;
  }
  return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
}