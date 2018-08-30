const stringCode = require('../src/string')

describe('reverseString', () => {
  const reverseString = stringCode.reverseString

  test('hello', () => {
    expect(reverseString('hello')).toEqual('olleh')
  })

  test('A man, a plan, a canal: Panama', () => {
    expect(reverseString('A man, a plan, a canal: Panama')).toEqual('amanaP :lanac a ,nalp a ,nam A')
  })
})

describe('reverse', () => {
  const reverse = stringCode.reverse

  test('123', () => {
    expect(reverse(123)).toEqual(321)
  })
  test('-120', () => {
    expect(reverse(-120)).toEqual(-21)
  })
  test('1534236469', () => {
    expect(reverse(1534236469)).toEqual(0)
  })

})

describe('firstUniqChar', () => {
  const firstUniqChar = stringCode.firstUniqChar

  test('leetcode', () => {
    expect(firstUniqChar('leetcode')).toEqual(0)
  })
  test('loveleetcode', () => {
    expect(firstUniqChar('loveleetcode')).toEqual(2)
  })
  test('cc', () => {
    expect(firstUniqChar('cc')).toEqual(-1)
  })

})

describe('isAnagram', () => {
  const isAnagram = stringCode.isAnagram

  test('anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true)
  })
  test('', () => {
    expect(isAnagram('', '')).toEqual(true)
  })
  test('cat', () => {
    expect(isAnagram('cat', 'rat')).toEqual(false)
  })

})

describe('isPalindrome', () => {
  const isPalindrome = stringCode.isPalindrome

  test('A man, a plan, a canal: Panama', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true)
  })

  test('race a car', () => {
    expect(isPalindrome('race a car')).toEqual(false)
  })

  test('0P', () => {
    expect(isPalindrome('0P')).toEqual(false)
  })

})

describe('myAtoi', () => {
  const myAtoi = stringCode.myAtoi

  test('42', () => {
    expect(myAtoi('42')).toEqual(42)
  })
  test('   -42', () => {
    expect(myAtoi('   -42')).toEqual(-42)
  })
  test('4193 with words', () => {
    expect(myAtoi('4193 with words')).toEqual(4193)
  })
  test('words and 987', () => {
    expect(myAtoi('words and 987')).toEqual(0)
  })
  test('-91283472332', () => {
    expect(myAtoi('-91283472332')).toEqual(-2147483648)
  })
  test('+1', () => {
    expect(myAtoi('+1')).toEqual(1)
  })

})


describe('strStr', () => {
  const strStr = stringCode.strStr

  test('hello', () => {
    expect(strStr('hello', 'll')).toEqual(2)
  })
  test('aaaaa', () => {
    expect(strStr('aaaaa', 'bba')).toEqual(-1)
  })
  test('aaaaa', () => {
    expect(strStr('aaaaa', '')).toEqual(0)
  })
  test('mississippi', () => {
    expect(strStr('mississippi', 'issi')).toEqual(1)
  })
  test('mississippi', () => {
    expect(strStr('mississippi', 'issip')).toEqual(4)
  })

})


describe('countAndSay', () => {
  const countAndSay = stringCode.countAndSay

  test('4', () => {
    expect(countAndSay(4)).toEqual('1211')
  })
  test('1', () => {
    expect(countAndSay(1)).toEqual('1')
  })

})

describe('countAndSay', () => {
  const longestCommonPrefix = stringCode.longestCommonPrefix

  test('4', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl')
  })
  test('4', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual('')
  })
  test('4', () => {
    expect(longestCommonPrefix([])).toEqual('')
  })

})