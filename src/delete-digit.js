const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const intArr = String(n).split('').map((str) => Number(str));
  const rest = [];
  const length = intArr.length;
  let max = 0;

  for (let i = 0; i < length; i += 1) {
    if (i === 0) {
      const last = intArr.pop();
      rest.unshift(last);
      max = Number(intArr.join(''));
    } else {
      const last = intArr.pop();
      const mix = intArr.concat(rest).join('');
      max = (max > mix) ? max : mix;
      rest.unshift(last);
    }
  }
  return +max;
}

module.exports = {
  deleteDigit
};
