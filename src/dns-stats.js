const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};
  const temp = [];

  if (domains.length > 1) {
    const extension = domains[0].split('.')[domains.length - 1];

    domains.forEach(dns => {
      temp.push(dns.split('.').reverse().join('.'));
    })
    temp.push(extension);

    temp.sort((a, b) => a.length - b.length);

    temp.forEach((value, index) => {
      let coincidenceNumber = Array.from(temp.join('').matchAll(value)).length;
      if (index === 0) {
        coincidenceNumber--;
      }
      const newElem = [];

      newElem.push(`.${value}`, coincidenceNumber);
      temp[index] = newElem;
    })
  } else {
    domains.forEach(dns => {
      temp.push(dns.split('.').reverse());
    });
    temp[0][0] = `.${temp[0][0]}`;
    temp[0][1] = `${temp[0][0]}.${temp[0][1]}`;
    const dns = {
      [temp[0][0]]: 1,
      [temp[0][1]]: 1,

    }
    return dns;
  }
  const dns = Object.fromEntries(temp);
  return dns;
}

module.exports = {
  getDNSStats
};
