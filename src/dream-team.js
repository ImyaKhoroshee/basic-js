const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const resultString = [];

  const result = members.filter(name => typeof name === 'string');
  if (!result.length) return false;

  result.forEach(element => {
    element = element.trim().toUpperCase()[0];
    resultString.push(element);
  });
  const finalString = resultString.sort((a, b) => a.localeCompare(b)).join('');
  return finalString;
}

module.exports = {
  createDreamTeam
};
