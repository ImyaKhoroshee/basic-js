const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabetObj = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25
  };

  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    let result = '';
    const encryptArray = this.definePositions(message, key);
    // Define the right position in alphabet. 26 is the length of alphabet.
    for (let i = 0; i < encryptArray[0].length; i += 1) {
      if (Object.values(this.alphabetObj).includes(encryptArray[0][i])) {
        const sum = (encryptArray[0][i] + encryptArray[1][i]) % 26;
        result += Object.keys(this.alphabetObj).find(key => this.alphabetObj[key] === sum);
      } else {
        result += encryptArray[0][i];
      }
    }
    return (this.direct) ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    let result = '';
    const decryptArray = this.definePositions(message, key);
    // Define the right position in alphabet. 26 is the length of alphabet.
    for (let i = 0; i < decryptArray[0].length; i += 1) {
      if (Object.values(this.alphabetObj).includes(decryptArray[0][i])) {
        const diff = (decryptArray[0][i] - decryptArray[1][i] + 26) % 26;
        result += Object.keys(this.alphabetObj).find(key => this.alphabetObj[key] === diff);
      } else {
        result += decryptArray[0][i];
      }
    }
    return (this.direct) ? result : result.split('').reverse().join('');
  }
  definePositions(message, key) {
    if (!message || !key) { throw new Error('Incorrect arguments!') }

    // Сonvert strings to uppercase
    const upperCaseMessage = message.toUpperCase();
    let upperCaseKey = key.toUpperCase();

    // Make our key suitable to encrypt/decrypt
    const copy = upperCaseMessage;
    const regExp = /[^A-Z]/g;
    const lengthOfLetters = copy.replaceAll(regExp, '');
    let keyString = '';

    for (let i = 0, j = 0; i < lengthOfLetters.length; i++) {
      if (Object.keys(this.alphabetObj).includes(lengthOfLetters[i])) {
        keyString += upperCaseKey[j % upperCaseKey.length];
        j++;
      } else {
        keyString += lengthOfLetters[i];
      }
    }

    const messageNums = [];
    const keyNums = [];

    // Find the corresponding numbers of key's letters in alphabet and push to a proper array
    for (let i = 0, j = 0; i < upperCaseMessage.length; i += 1) {
      if (Object.keys(this.alphabetObj).includes(upperCaseMessage[i])) {
        keyNums.push(this.alphabetObj[keyString[j]]);
        j += 1;
      } else {
        keyNums.push(upperCaseMessage[i]);
      }
    }

    // Find the corresponding numbers of message's letters in alphabet and push to a proper array
    for (let i = 0; i < upperCaseMessage.length; i++) {
      if (typeof this.alphabetObj[upperCaseMessage[i]] === 'undefined') {
        messageNums.push(upperCaseMessage[i]);
      } else {
        messageNums.push(this.alphabetObj[upperCaseMessage[i]]);
      }
    }
    const messageAndKeyNumArray = [];
    messageAndKeyNumArray.push(messageNums, keyNums);
    return messageAndKeyNumArray;
  }
}

module.exports = {
  VigenereCipheringMachine
};
