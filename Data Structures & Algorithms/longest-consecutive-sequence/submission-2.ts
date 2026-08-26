class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    let max_seq = 0;
    if (nums.length === 0) {
      return 0;
    }
    const set = new Set(nums);
    for (const i of set) {
      if (!set.has(i - 1)) {
        let count = 1;
        let current = i;
        while (set.has(current + 1)) {
          count++;
          current++;
        }

        max_seq = Math.max(count, max_seq);
      }
    }
    return max_seq;
  }
}
