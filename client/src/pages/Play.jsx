import React, { useState, useEffect } from 'react';
import Tile from '../components/Tile';
import '../components/tile.css';
import Printer from '../utils/printer'

import { useQuery } from "@apollo/client";
import { QUERY_GET_MATRIX } from '../utils/queries';

const Play = () => {
  const [matrix, setMatrix] = useState([]);
  const { loading, data } = useQuery(QUERY_GET_MATRIX);

  useEffect(() => {
    if (!loading && data) {
      setMatrix(data.getMatrix);
      console.log(matrix);
      const pm = Printer.matrixPrinter(matrix)
      if(pm){
        // console.log(pm)
        pm.forEach((line)=>{
          console.log(line)
        })
      }
      
    }
  }, [loading, data, matrix]);



    const [gameStarted, setGameStarted] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
    // Create a new array to hold the state of individual tiles
    const [tilesState, setTilesState] = useState(() => {
      const initialTilesState = Array(25).fill(false);
      return initialTilesState;
    });
  
    // Handle the "Start" button click to start the game
    const handleStartGame = () => {
      setGameStarted(true);
    };
  
    // Handle the "Rules" button click to show/hide the modal
    const handleRulesClick = () => {
      setShowModal(!showModal);
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
        <Tile key={index} value={null} isRevealed={isRevealed} onClick={() => handleTileClick(index)} />
      ));
    };
  
    return (
      <div className="container">
        <div className="buttons-container">
          {/* START button */}
          <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200" onClick={handleStartGame}>Start</button>
          {/* RULES button */}
          {/* <button className="minecraft-btn mx-auto w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200" onClick={handleRulesClick}>Rules</button> */}
        </div>
  
        {/* The modal */}
        {/* {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleRulesClick}>
                &times;
              </span>
              <h2>Rules</h2>
              <p>Explanation of the rules of the game goes here.</p>
            </div>
          </div>
        )} */}
  
        <div className="grid-container">{renderGrid()}</div>

      </div>
    );
  };
  
  export default Play;
