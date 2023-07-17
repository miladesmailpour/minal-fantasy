import React from 'react';
import './tile.css';

const Tile = ({ value, isRevealed, onClick }) => {
  return (
    // <div className={`tile ${isRevealed ? 'revealed' : 'hidden'}`} onClick={onClick}>
    <div className={`tile ${isRevealed ? 'revealed' : 'hidden'}`} onClick={onClick}>
    {/* {isRevealed ? (value ? value : '-') : null} */}
      <p>{value}</p>
    </div>
  );
};

export default Tile;
