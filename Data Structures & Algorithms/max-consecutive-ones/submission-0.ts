class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMaxConsecutiveOnes(nums: number[]): number {
    const len = nums.length;
    let max = -Infinity;
    let count = 0;
    for (let i = 0; i < len; i++) {
      if (nums[i] !== 1) {
        count = 0;
      } else {
        count++;
      }
      max = Math.max(max, count);
    }
    return max;
  }
}
