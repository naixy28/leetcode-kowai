/**
 * 344. Reverse String
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('')
};

/**
 * 7. Reverse Integer
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign = x >= 0
  const abs = x * (sign ? 1 : -1)
  let ret = 0

  // need ~~ to fix divided i cause this is js
  for (let i = abs; i > 0; i = ~~(i / 10)) {
    ret = ret * 10 + i % 10
  }

  ret = ret * (sign ? 1 : -1)

  // js has no 32-bit number type
  if (ret >= 2147483648 || ret < -2147483648) {
    return 0
  }

  return ret
};

module.exports = {
  reverseString,
  reverse,
}