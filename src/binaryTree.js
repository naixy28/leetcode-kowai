/**
 * 104. Maximum Depth of Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  function deep(node, outerDepth) {
      const currentDepth = outerDepth + 1
      
      let leftD = node.left && deep(node.left, currentDepth) || currentDepth
      let rightD = node.right && deep(node.right, currentDepth) || currentDepth
      
      return leftD > rightD ? leftD : rightD
  }
  
  if (root) {
      return deep(root, 0)
  } else {
      return 0
  }
};

/**
 * 98. Validate Binary Search Tree
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    
  function func(node, min, max) {
      if (node) {
          let lBst 
          let rBst

          if (node.val > min && node.val < max) {
              lBst = func(node.left, min, node.val)
              rBst = func(node.right, node.val, max)
              
              return lBst && rBst
          } else {
              return false
          }       
          
      } else {
          return true
      }
  }
  
  return func(root, -Infinity, Infinity)

};

/**
 * 101. Symmetric Tree
 * 愚蠢的版本 用了三种遍历
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const list = []
  const p = []
  const v = []
  
  function midTrav(node, arr) {
      if (node) {
          midTrav(node.left, arr)
          arr.push(node.val)
          midTrav(node.right, arr)
      }
      return
  }
  function pre(node, arr) {
      if (node) {
          arr.push(node.val)
          pre(node.left, arr)
          pre(node.right, arr)
      }
      return
  }
  function after(node, arr) {
      if (node) {
          after(node.left, arr)
          after(node.right, arr)
          arr.push(node.val)
      }
      return
  }
  
  
  pre(root, p)
  after(root, v)
  midTrav(root, list)
  
  let isMid = true
  
  console.log(p, v, list)
  
  if (list.length) {
       for (let i = 0; i < ~~(list.length / 2); i++) {
          if (list[i] !== list[list.length -1 -i]) {
              isMid = false
          }
      }
  }
  
  if (p.join('') == v.reverse().join('') && isMid) {
      return true
  } else {
      return false
  }

};

/**
 * 101. Symmetric Tree
 * 简单版本 一次递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
  function isMirror(n1, n2) {
      if (!n1 && !n2) {
          return true
      }
      
      if (!n1 || !n2) return false
      
      
      if (n1.val === n2.val) {
          return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left)
      } else {
          return false
      }
  }
  
  
  return isMirror(root, root)

};

/**
 * 102. Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
      return []
    }

    const queue = [{
      val: root,
      level: 0
    }]
    const ret = []

    while (queue.length) {
      const curr = queue.shift()

      if (ret[curr.level]) {
        ret[curr.level].push(curr.val.val)
      } else {
        ret[curr.level] = [curr.val.val]
      }

      func(curr, queue)
    }

    function func(node, q) {
      if (node.val.left) {
          q.push({
          val: node.val.left,
          level: node.level + 1
        })
      }
      if (node.val.right) {
          q.push({
          val: node.val.right,
          level: node.level + 1
        })
      }
    }

    return ret
};

/**
 * 108. Convert Sorted Array to Binary Search Tree
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function func(arr, min, max) {
    if (min > max) return null

    const mid = ~~((max - min) / 2) + min
    const rt = new TreeNode(arr[mid])
    
    rt.left = func(arr, min, mid - 1)
    rt.right = func(arr, mid + 1, max)
    return rt
  }

  return func(nums, 0, nums.length - 1)
};