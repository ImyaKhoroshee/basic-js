const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, 
 *                      separator: '**', 
 *                      addition: 'PLUS', 
 *                      additionRepeatTimes: 3, 
 *                      additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  // Prepare parameters suitable to make the result string
  const separator = (!options.separator) ? '+' : options.separator;
  const additionSeparator = (!options.additionSeparator) ? '|' : options.additionSeparator;
  const repeatTimes = (!options.repeatTimes) ? 1 : options.repeatTimes;
  const additionRepeatTimes = (!options.additionRepeatTimes) ? 1 : options.additionRepeatTimes;
  const addition = (options.addition || options.addition === false || options.addition === null) ? String(options.addition) : '';

  // Make inner sequence
  let innerSequence = `${addition}${additionSeparator}`.repeat(additionRepeatTimes);
  innerSequence = innerSequence.slice(0, innerSequence.length - additionSeparator.length);

  // Make result string
  let outsideSequence = `${String(str)}${innerSequence}${separator}`.repeat(repeatTimes);
  outsideSequence = outsideSequence.slice(0, outsideSequence.length - separator.length);

  return outsideSequence;
}

module.exports = {
  repeater
};


