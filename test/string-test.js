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