class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  getConcatenation(nums: number[]): number[] {
    const len = nums.length;
    const arr = new Array(2 * len);
    for (let i = 0; i <= len - 1; i++) {
      arr[i] = arr[i + len] = nums[i];
    }
    return arr;
  }
}
