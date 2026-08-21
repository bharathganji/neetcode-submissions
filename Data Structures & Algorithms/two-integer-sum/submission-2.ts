class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const resultMap = new Map();
    for (let i in nums) {
      let difference = target - nums[i];
       if (resultMap.has(difference)) {
        return [Number(resultMap.get(difference)), Number(i)];
      } else {
        resultMap.set(nums[i], i);
      }
     }
  }
}
