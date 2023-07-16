const matrixCreator = (rows = 6, columns = 6, threats = 5, rewards = 3) => {
  // Create the matrix
  let matrix = [];
  // Generate empty matrix
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = {
        reward: false,
        threat: false,
        adjacentThreat: 0,
        adjacentReward: 0,
        revealed: false,
        flagged: false,
      };
    }
  }
  // Generate threats
  let threatsPlaced = 0;
  while (threatsPlaced < threats) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * columns);
    if (
      !matrix[randomRow][randomCol].threat &&
      !matrix[randomRow][randomCol].reward
    ) {
      matrix[randomRow][randomCol].threat = true;
      threatsPlaced++;
    }
  }
  // Generate rewards
  let rewardsPlaced = 0;
  while (rewardsPlaced < rewards) {
    const randomRow = Math.floor(Math.random() * rows);
    const randomCol = Math.floor(Math.random() * columns);
    if (
      !matrix[randomRow][randomCol].reward &&
      !matrix[randomRow][randomCol].threat
    ) {
      matrix[randomRow][randomCol].reward = true;
      rewardsPlaced++;
    }
  }
  // Calculate adjacent threat counts
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (!matrix[i][j].threat && !matrix[i][j].reward) {
        // Calculate adjacent threat count for each cell
        let count = 0;
        // Check all surrounding cells
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            const newRow = i + di;
            const newCol = j + dj;
            if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < columns &&
              matrix[newRow][newCol].threat
            ) {
              count++;
            }
          }
        }
        matrix[i][j].adjacentThreat = count;
      }
    }
  }
  return matrix;
};

const matrixObjToArray = (matrix) => {
  const playGround = []; // Initialize an empty array
  for (let i = 0; i < matrix.length; i++) {
    playGround[i] = []; // Initialize an empty array for each row in playGround
    for (let j = 0; j < matrix[i].length; j++) {
      playGround[i][j] = matrix[i][j]; // Set the value in the playGround array
    }
  }
  return playGround;
};

const matrixPrinter = (matrix) => {
  const playGround = []; // Initialize an empty array

  for (let i = 0; i < matrix.length; i++) {
    playGround[i] = [];
    process.stdout.write(`\n`);
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
      process.stdout.write(` ${value} `);
      playGround[i][j] = value;
    }
  }
  process.stdout.write(`\n`);
  return playGround;
};
module.exports = { matrixCreator, matrixPrinter };
