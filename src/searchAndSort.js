/**
 * 278. First Bad Version
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      
      function func(min, max) {
          if (min > max) return -1
          
          const mid = ~~((max - min) / 2) + min
          
          if (isBadVersion(mid)) {
              if (max === min) {
                  return min
              } else {
                  return func(min, mid)
              }
          } else {
              return func(mid + 1, max)
          }
      }
      
      return func(1, n)
  
  };
};