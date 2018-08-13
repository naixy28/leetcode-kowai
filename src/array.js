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

var nums = [-1]

console.log(rotate(nums, 2), nums)