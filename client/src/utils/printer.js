class Printer {
  matrixPrinter(matrix) {
    const playGround = []; // Initialize an empty array

    for (let i = 0; i < matrix.length; i++) {
      playGround[i] = [];
      // console.log(`\n`);
      for (let j = 0; j < matrix[i].length; j++) {
        const cell = matrix[i][j];
        const threat = cell.threat;
        const reward = cell.reward;

        let value;
        if (threat) {
          value = "T";
        } else if (reward) {
          value = "R";
        } else {
          value = cell.adjacentThreat;
        }
        // console.log(` ${value} `);
        playGround[i][j] = value;
      }
    }
    // console.log(`\n`);
    return playGround;
    // console.log(playGround)
  }
}

export default new Printer();
