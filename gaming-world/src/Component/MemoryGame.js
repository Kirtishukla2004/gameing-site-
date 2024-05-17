import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const MemoryGame = () => {
  const initialCards = [
    { id: 1, content: 'A', matched: false },
    { id: 2, content: 'A', matched: false },
    { id: 3, content: 'B', matched: false },
    { id: 4, content: 'B', matched: false },
    { id: 5, content: 'C', matched: false },
    { id: 6, content: 'C', matched: false },
    { id: 7, content: 'D', matched: false },
    { id: 8, content: 'D', matched: false },
  ];

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [disableAll, setDisableAll] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    // Shuffle cards on component mount
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index) => {
    if (disableAll || flippedCards.includes(index) || cards[index].matched) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      setMoves(moves + 1);
      if (cards[firstIndex].content === cards[secondIndex].content) {
        const newCards = cards.map((card, i) =>
          newFlippedCards.includes(i) ? { ...card, matched: true } : card
        );
        setCards(newCards);
        setFlippedCards([]);
        setScore(score + 1);
      } else {
        setDisableAll(true);
        setTimeout(() => {
          setFlippedCards([]);
          setDisableAll(false);
        }, 1000);
      }
    }
  };

  const restartGame = () => {
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
  };

  const isGameOver = cards.every((card) => card.matched);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Memory Game</h1>
      <div className="flex justify-between w-full mb-4">
        <div>Score: {score}</div>
        <div>Moves: {moves}</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center border rounded ${
              flippedCards.includes(index) || card.matched
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300'
            } cursor-pointer`}
            onClick={() => handleCardClick(index)}
          >
            {(flippedCards.includes(index) || card.matched) && (
              <span className="text-xl">{card.content}</span>
            )}
          </div>
        ))}
      </div>
      {isGameOver && (
        <div className="text-green-600 font-bold mt-4">Congratulations! You've matched all pairs!</div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={restartGame}
      >
        Restart Game
      </button>
    </div>
  );
};

export default MemoryGame;
