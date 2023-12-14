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

  const separator = (!options.separator) ? '+' : options.separator;
  const additionSeparator = (!options.additionSeparator) ? '|' : options.additionSeparator;

  if (!options.additionRepeatTimes && !options.repeatTimes && options.addition) return `${String(str)}${String(options.addition)}`;

  if (!options.additionRepeatTimes && !options.repeatTimes && !options.addition) return String(str);


  if (!options.additionRepeatTimes) {
    let sequence = `${String(str)}${separator}`.repeat(options.repeatTimes)
    return sequence.slice(0, sequence.length - separator.length);
  }
  // if (options.repeatTimes && options.additionRepeatTimes && options.addition && options.separator) {
  //   let sequence = `${options.addition}`.repeat(options.additionRepeatTimes);
  //   sequence = `${String(str)}${sequence}${options.separator}`.repeat(options.repeatTimes)
  //   return sequence.slice(0, sequence.length - separator.length);
  // }
  if (options.repeatTimes && options.separator && options.addition && options.additionRepeatTimes && options.additionSeparator) {
    let innerSequence = `${String(options.addition)}${additionSeparator}`.repeat(options.additionRepeatTimes);
    innerSequence = innerSequence.slice(0, innerSequence.length - additionSeparator.length);

    let outsideSequence = `${String(str)}${innerSequence}${separator}`.repeat(options.repeatTimes);
    outsideSequence = outsideSequence.slice(0, outsideSequence.length - separator.length);

    return outsideSequence;
  }
}

module.exports = {
  repeater
};
