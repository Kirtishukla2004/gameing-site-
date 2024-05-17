import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const SPS = () => {
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      losses: 0,
      ties: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  const updateScoreElement = () => {
    return (
      <p className="text-xl mt-4">
        Wins: {score.wins}, Losses: {score.losses}, Ties: {score.ties}
      </p>
    );
  };

  const pickComputerMove = () => {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }

    return computerMove;
  };

  const playGame = (playerMove) => {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose.";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You lose.";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else if (computerMove === "scissors") {
        result = "You win.";
      }
    }

    if (result === "You win.") {
      setScore((prevScore) => ({ ...prevScore, wins: prevScore.wins + 1 }));
    } else if (result === "You lose.") {
      setScore((prevScore) => ({ ...prevScore, losses: prevScore.losses + 1 }));
    } else if (result === "Tie.") {
      setScore((prevScore) => ({ ...prevScore, ties: prevScore.ties + 1 }));
    }

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(
      ".js-moves"
    ).innerHTML = `You picked <img src="${playerMove}-emoji.png" class="inline-block w-8 h-8" alt="${playerMove}" /> - computer picked <img src="${computerMove}-emoji.png" class="inline-block w-8 h-8" alt="${computerMove}" />`;
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center justify-center p-4">
      <p className="text-3xl font-bold mb-4">Rock Paper Scissors</p>
      <div className="flex space-x-4 mb-4">
        <button onClick={() => playGame("rock")} className="move-button p-2 bg-gray-800 hover:bg-gray-700 rounded">
          <img src="rock-emoji.png" className="move-icon w-12 h-12" alt="Rock" />
        </button>
        <button onClick={() => playGame("paper")} className="move-button p-2 bg-gray-800 hover:bg-gray-700 rounded">
          <img src="paper-emoji.png" className="move-icon w-12 h-12" alt="Paper" />
        </button>
        <button onClick={() => playGame("scissors")} className="move-button p-2 bg-gray-800 hover:bg-gray-700 rounded">
          <img src="scissors-emoji.png" className="move-icon w-12 h-12" alt="Scissors" />
        </button>
      </div>
      <p className="js-result text-xl mb-4"></p>
      <p className="js-moves text-lg mb-4"></p>
      {updateScoreElement()}
      <button
        onClick={() => {
          setScore({ wins: 0, losses: 0, ties: 0 });
          localStorage.removeItem("score");
          updateScoreElement();
        }}
        className="reset-score-button bg-white text-black px-4 py-2 rounded-md mt-4 hover:bg-gray-300"
      >
        Reset Score
      </button>
    </div>
  );
};

export default SPS;
