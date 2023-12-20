const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let rows = 0; rows < matrix.length; rows += 1) {
    result[rows] = [];

    for (let cols = 0; cols < matrix[0].length; cols += 1) {
      let bombs = 0;

      // [rows-1][cols-1] | [rows-1][cols] | [rows-1][cols+1]
      // -----------------------------------------------------
      //                        target
      //  [rows][cols-1]  |  [rows][cols]  |  [rows][cols+1]
      // -----------------------------------------------------
      // [rows+1][cols-1] | [rows+1][cols] | [rows+1][cols+1]

      // Always exists
      if (matrix[rows][cols - 1]) { bombs += 1 };
      if (matrix[rows][cols + 1]) { bombs += 1 };

      // Check if row > 0
      if (matrix[rows - 1]) {
        if (matrix[rows - 1][cols - 1] && matrix[rows - 1][cols - 1] === true) { bombs += 1 };
        if (matrix[rows - 1][cols] && matrix[rows - 1][cols] === true) { bombs += 1 };
        if (matrix[rows - 1][cols + 1] && matrix[rows - 1][cols + 1] === true) { bombs += 1 };
      }
      // Check if row < 3
      if ((matrix[rows + 1])) {
        if (matrix[rows + 1][cols - 1] && matrix[rows + 1][cols - 1] === true) { bombs += 1 };
        if (matrix[rows + 1][cols] && matrix[rows + 1][cols] === true) { bombs += 1 };
        if (matrix[rows + 1][cols + 1] && matrix[rows + 1][cols + 1] === true) { bombs += 1 };
      }
      result[rows][cols] = bombs;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
