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

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const a = s.split('')
    const o = {}

    for (let i = 0; i < a.length; i++) {
      if (o[a[i]]) continue
      if (a.lastIndexOf(a[i]) === i) {
        return i
      }
      o[a[i]] = true
    }
    return -1
};

/**
 * 242. Valid Anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sort = (x, y) => y.charCodeAt() - x.charCodeAt()
    const sA = s.split('').sort(sort)
    const tA = t.split('').sort(sort)

    return sA.join('') === tA.join('')
};


/**
 * 125. Valid Palindrome
 * @param {string} s
 * @return {boolean}
 * @description 用了非常暴力的方法解决，若追求性能，可以尝试两头向内做循环判断
 */
var isPalindrome = function(s) {
  const strReg = /^[a-zA-Z0-9]{1}$/
  const filtered = s.split('')
    .filter(char => strReg.test(char))
    .map(c => c.toLowerCase())

  return filtered.join('') === filtered.reverse().join('')

};

/**
 * 8. String to Integer (atoi)
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MIN = -2147483648
  const MAX = 2147483647
  const r = /^\s*([-|+])?(\d+)/
  const ret = str.match(r)

  if (!ret) return 0

  const sign = ret[1]
  const num = (sign === '-' ? -1 : 1) * ret[ret.length - 1]

  return num > MAX ? MAX : num < MIN ? MIN : num
};

/**
 * 28. Implement strStr()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0

  const len = needle.length
  let i = 0
  let j = 0

  while (i < haystack.length) {
    if (haystack[i] !== needle[j]) {
      i = i - j
      j = 0
    } else {
      j++
    }
    i++

    if (j === len) {
      return i - len
    }
  }
  return -1
};

/**
 * 38. Count and Say
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let s = undefined
  let currNum
  let currCount
  let temp = []

  do {
    n--
    if (!s) {
      s = '1'
      continue
    }
    
    for (let i = 0; i <= s.length; i++) {
      if (!currNum) {
        currNum = s[i]
        currCount = 1
      } else if (currNum !== s[i]) {
        temp.push(currCount, currNum)
        currNum = s[i]
        currCount = 1
      } else {
        currCount ++
      }
    }
    s = temp.join('')
    temp = []
    currCount = 0
    currNum = undefined

  } while (n)

  return s
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let res = ''
  const sCount = strs && strs.length

  if (!strs[0]) return res

  for (let i = 0; i < strs[0].length; i++) {
    const s = strs[0][i]

    for (let j = 1; j < sCount; j++) {
      if (strs[j][i] !== s) {
        return res
      }
    }
    res += s
  }
  return res
};

module.exports = {
  reverseString,
  reverse,
  firstUniqChar,
  isAnagram,
  isPalindrome,
  myAtoi,
  strStr,
  countAndSay,
  longestCommonPrefix,
}
