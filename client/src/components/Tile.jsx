import React from 'react';
import './tile.css';

const Tile = ({ value, isRevealed, onClick }) => {
  return (
    <div className={`tile ${isRevealed ? 'revealed' : 'hidden'}`} onClick={onClick}>
      {isRevealed ? (value ? value : '-') : null}
    </div>
  );
};

export default Tile;
