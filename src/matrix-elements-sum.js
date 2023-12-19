const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;

  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let row = 0; row < matrix.length; row += 1) {
      if (matrix[row][i] === 0) {
        break;
      } else {
        result += matrix[row][i];
      }
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
