/**
 * 26. 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let curr = nums[0]
    let len = 1

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > curr) {
        curr = nums[i]
        nums[len++] = curr
      }
    }

    return len
};


/**
 * 189. Rotate Array
 * @description 先计算出真正需要rotate的次数
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const temp = []
    const len = nums.length
    const copyK = k % len
    let copyK2 = copyK

    for (var i = len; i > 0; i--) {
      if (copyK2-- >= 0) {
        temp[copyK2] = nums[i - 1]
      }

      if (i - copyK - 1 >= 0) {
        nums[i - 1] = nums[i - copyK - 1]
      } else {
        nums[i - 1] = temp[i - 1]
      }

    }
};


/**
 * 122. 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0] || 0
    let prev = prices[0] || 0
    let sum = 0

    for (let i = 0; i <= prices.length; i++) {
      if (prices[i] < prev || !prices[i]) {
        sum += prev - min
        min = prices[i]
      }
      if (prices[i] < min) {
        min = prices[i]
        prev = prices[i]
      }


      prev = prices[i]
    }

    return sum
};

/**
 * 217. 存在重复元素
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const o = {}

  for (let i = 0; i < nums.length; i++) {
    if (!o[nums[i]]) {
      o[nums[i]] = 1
    } else {
      return true
    }

  }
  return false
};


/**
 * 136. 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let a = nums[0]

    for (let i = 1; i < nums.length; i++) {
      a = a ^ nums[i]
    }

    return a
};

/**
 * 350. 两个数组的交集 II
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
   return nums1.filter(ele => {
     let i = nums2.indexOf(ele)
     if (i >= 0) {
       delete nums2[i]
       return true
     }
     return false
   })
};

/**
 * 66. 加一
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let i = digits.length - 1

  while (i >= 0) {
    if (digits[i] + 1 === 10) {
      digits[i] = 0
      i--
    } else {
      digits[i] = digits[i] + 1
      break
    }
  }
  if (digits[0] === 0) {
    digits.unshift(1)
  }
  return digits
};

/**
 * 283. Move Zeroes
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let z
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      z = i
      for (let j = z + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          nums[z] = nums[j]
          nums[j] = 0
          break
        }
      }
    }
  }
};

var nums1 = [0]

console.log(moveZeroes(nums1), nums1)