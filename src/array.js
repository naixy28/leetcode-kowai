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

var nums =[4,1,2,1,2]

console.log(singleNumber(nums))