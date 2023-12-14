const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  const array = [];
  const controlStructures = ['--double-next', '--discard-prev', '--double-prev', '--discard-next'];

  if (arr instanceof Array) {
    arr.forEach(element => {
      if (!controlStructures.includes(element)) { array.push(element); }

      else if (element === '--double-next') {
        const elementToDouble = arr[arr.indexOf(element) + 1];
        (!elementToDouble) ? array.push('') : array.push(elementToDouble);
      }

      else if (element === '--discard-prev') {
        if (arr.indexOf(element) !== 0) { array.pop(); }
      }

      else if (element === '--double-prev') {
        const elementToDouble = array[array.length - 1];
        (!elementToDouble) ? array.push('') : array.push(elementToDouble);
      }

      else if (element === '--discard-next') {
        arr[arr.indexOf(element) + 1] = '';
        arr[arr.indexOf(element)] = '';
        array.push('');
      }
    });
    return array.filter(value => value !== '');
  } else throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
