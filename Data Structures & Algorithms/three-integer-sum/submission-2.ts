class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    const set = nums.sort((a, b) => a - b);

    const result: number[][] = [];

    for (let i = 0; i < set.length - 2; i++) {
      // Skip duplicate first values
      if (i > 0 && set[i] === set[i - 1]) continue;

      let first = i + 1;
      let last = set.length - 1;

      while (first < last) {
        const sum = set[first] + set[last];
        const target = -set[i];

        if (sum === target) {
          result.push([set[i], set[first], set[last]]);

          // Save the current values
          const firstValue = set[first];
          const lastValue = set[last];

          // Skip duplicate first values
          while (first < last && set[first] === firstValue) {
            first++;
          }

          // Skip duplicate last values
          while (first < last && set[last] === lastValue) {
            last--;
          }
        } else if (sum < target) {
          first++;
        } else {
          last--;
        }
      }
    }

    return result;
  }
}

