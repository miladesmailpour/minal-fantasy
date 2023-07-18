import React, { useState } from 'react';
import './tile.css';

const Tile = ({ value, isRevealed, onClick }) => {
  const [state, setState] = useState({
    reward: value.reward,
    threat: value.threat,
    adjacentThreat: value.adjacentThreat,
    adjacentReward: value.adjacentReward,
    revealed: value.revealed,
    flagged: value.flagged,
  });
  console.log(state);

  return (
    <div className={`tile ${isRevealed ? 'revealed' : 'hidden'}`} onClick={onClick}>
      <p>{state.adjacentThreat}</p>
    </div>
  );
};

export default Tile;
