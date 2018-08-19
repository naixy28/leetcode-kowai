/*************** Array type questions **************/

const arrayCode = require('../src/array')

describe('moveZeroes', () => {
  const moveZeroes = arrayCode.moveZeroes
  test('[0]', () => {
    const nums = [0]

    moveZeroes(nums)
    expect(nums)
      .toEqual([0])
  })
  test('[0, 2, 1, 0, 0, 9]', () => {
    const nums = [0, 2, 1, 0, 0, 9]

    moveZeroes(nums)
    expect(nums)
      .toEqual([2, 1, 9, 0, 0, 0])
  })
})