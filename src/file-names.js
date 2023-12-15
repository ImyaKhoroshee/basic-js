const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!names.length) return names;

  const namesAfterChanges = [];
  let newName = '';

  namesAfterChanges.push(names[0]);

  names.forEach((name, index) => {
    // Start from second element
    if (index > 0) {
      // If presence in final array - add (1)
      if (namesAfterChanges.includes(name)) {
        newName = `${name}(1)`;
        // If presence in final array and changed name of file includes in final array - increase suffix to 1
        if (namesAfterChanges.includes(newName)) {
          const arrayFromName = newName.split('');

          arrayFromName[arrayFromName.length - 2] = Number(arrayFromName[arrayFromName.length - 2]) + 1;
          newName = arrayFromName.join('');

          namesAfterChanges.push(newName);
        } else {
          // If presence in final array but changed name of file does not include in final array - add changed name
          namesAfterChanges.push(newName);
        }
      } else {
        // If there is no such name in final array - add without changings
        namesAfterChanges.push(name);
      }
    }
  })
  return namesAfterChanges;
}

module.exports = {
  renameFiles
};
