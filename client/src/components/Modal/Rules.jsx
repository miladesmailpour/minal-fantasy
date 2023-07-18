import React, { useEffect } from "react";
import "./rules.css";

function Rules() {
  return (
    <div className="rules-text">
      Minal Fantasy is a classic single-player puzzle game that involves
      uncovering tiles on a grid to reveal hidden monsters and crystals. The
      objective is to grab all of the treasure without falling in battle.
      <br></br>
      <br></br>
      The game board consists of a square grid of 5x5
      tiles. A certain number of rewards are randomly placed on the grid before
      the game starts. Left-clicking on a cell uncovers its contents: If the
      tile contains a monster, a battle ensues. If the player falls in battle,
      they lose. If the tile is empty, it will display a number indicating the
      total number of monsters in its neighboring tiles (horizontal,
      vertical, or diagonal).
      <br></br>
      <br></br>
      Using the numbers revealed when clicking on empty tiles,
      players can deduce the locations of monsters. For example, if a cell
      displays the number "2," and there are only two unopened cells adjacent to
      it, both those cells must contain monsters. By using these deductions,
      players can continue to clear more tiles safely.
      <br></br>
      <br></br>
      Once the treasure has been collected, the player wins!
    </div>
  );
}

export default Rules;
