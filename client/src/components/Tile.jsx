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

  const handleClick = () => {
    if (!state.revealed) {
      setState((prevState) => ({
        ...prevState,
        revealed: true,
      }));
    }
  };

  const clicked = state.revealed;
  let cell = '';
  if (state.threat) cell = 'T';
  else if (state.reward) cell = 'R';
  else cell = state.adjacentThreat;

  return (
    <div className={`tile ${clicked ? 'revealed' : 'hidden'}`} onClick={handleClick}>
      {clicked ? <p>{cell}</p> : null}
    </div>
  );
};

export default Tile;
