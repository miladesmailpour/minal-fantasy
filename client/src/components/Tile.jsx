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
  const threatsGifPath = [<img src='../../assets/sprites/demon/Demon-Sprite64.gif' alt="Demon-Sprite.gif" />]
  const rewardsGifPath = [
    <img src='../../assets/sprites/knight/Knight-Sprite64.gif' alt="Knight-Sprite64.gif" />,
    <img src='../../assets/sprites/undeadTree/Undead-Tree-Sprite64.gif' alt="Undead-Tree-Sprite64.gif" />,
    <img src='../../assets/sprites/wizard/Wizard-Sprite64.gif' alt="Wizard-Sprite64.gif" />
  ]
  if (state.threat) {
    cell = threatsGifPath[0];
  }
  else if (state.reward) cell = rewardsGifPath[Math.floor(Math.random() * 3)];
  else cell = state.adjacentThreat;

  return (
    <div className={`tile ${clicked ? 'revealed' : 'hidden'}`} onClick={handleClick}>
      {clicked ? <p>{cell}</p> : null}
    </div>
  );
};

export default Tile;
