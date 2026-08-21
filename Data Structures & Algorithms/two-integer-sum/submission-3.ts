class Solution {
  twoSum(nums: number[], target: number): number[] {
    const resultMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];

      if (resultMap.has(difference)) {
        return [resultMap.get(difference)!, i];
      }

      resultMap.set(nums[i], i);
    }

    return [];
  }
}