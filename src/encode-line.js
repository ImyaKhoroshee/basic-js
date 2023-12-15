const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let counter = 1;
  const arrayOfStr = str.split('');

  arrayOfStr.forEach((letter, i) => {
    if (letter === arrayOfStr[i + 1]) {
      counter += 1;
    } else {
      if (counter > 0) {
        result.push(`${counter}${letter}`);
        counter = 1;
      } else {
        result.push(letter);
      }
    }
  });
  return result.join('').replaceAll('1', '');
}

module.exports = {
  encodeLine
};
