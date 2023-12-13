const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const result = [];
  const smallestArr = (s1.length > s2.length) ? s2.split('') : s1.split('');
  const largestArr = (s1.length > s2.length) ? s1.split('') : s2.split('');

  smallestArr.forEach((symbol) => {
    if (largestArr.includes(symbol)) {
      result.push(symbol);
      let indexOfSymbol = largestArr.indexOf(symbol);
      largestArr.splice(indexOfSymbol, 1)
    }
  })
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
