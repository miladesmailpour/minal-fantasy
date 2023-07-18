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
  const clicked = state.revealed;
  // console.log(clicked);
  let cell = '';
  if(state.threat) cell = 'T';
  else if(state.reward) cell = 'R';
  else cell = state.adjacentThreat;
  // console.log(typeof state.threat)

  return (
    <div className={`tile ${clicked ? 'revealed' : 'hidden'}`} onClick={onClick}>
      
      {
        clicked ?
        (
          <p>{cell}</p>
        )
        :
        (
          <p>{}</p>
        )
      }
    </div>
  );
};

export default Tile;
