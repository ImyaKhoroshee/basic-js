const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const catEars = [];
  matrix.forEach((subarray) => {
    subarray.forEach((value) => {
      if (value === '^^') {
        catEars.push(value);
      }
    });
  });
  return catEars.length;
}

module.exports = {
  countCats
};
