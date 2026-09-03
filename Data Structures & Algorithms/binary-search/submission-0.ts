class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums: number[], target: number): number {
    let left = 0,
      right = nums.length - 1;
    let mid;
    while (right >= left) {
      mid = left + Math.floor(right - left / 2);
      if (nums[mid] === target) {
        return mid;
      }
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }
}
