import React, { useState } from "react";
import Tile from "../components/Tile";
import "../components/tile.css";
import { useOutletContext } from "react-router";

const Play = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const [setModalContent, setIsModalOpen] = useOutletContext();

  // Create a new array to hold the state of individual tiles
  const [tilesState, setTilesState] = useState(() => {
    const initialTilesState = Array(25).fill(false);
    return initialTilesState;
  });

  // Handle the "Start" button click to start the game
  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleTileClick = (index) => {
    if (gameStarted) {
      // Create a copy of the tiles state to avoid mutating the state directly
      const updatedTilesState = [...tilesState];
      updatedTilesState[index] = true;
      setTilesState(updatedTilesState);
    }
  };

  const renderGrid = () => {
    return tilesState.map((isRevealed, index) => (
      <Tile
        key={index}
        value={null}
        isRevealed={isRevealed}
        onClick={() => handleTileClick(index)}
      />
    ));
  };

  return (
    <div>
      <div className="buttons-container">
        {/* START button */}
        <button
          className="minecraft-btn"
          onClick={handleStartGame}
        >
          Start
        </button>
        {/* RULES button */}
        <button
          className="minecraft-btn"
          onClick={() => {
            setIsModalOpen(true);
            setModalContent('rules')
          }}
        >
          Rules
        </button>
      </div>

      <div className="grid-container">{renderGrid()}</div>
    </div>
  );
};

export default Play;
