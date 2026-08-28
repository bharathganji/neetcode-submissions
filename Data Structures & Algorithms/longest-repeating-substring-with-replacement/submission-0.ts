class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s: string, k: number): number {
    let l = 0;
    let max_freq = 0;
    let result = 0;
    let count = new Map();
    for (let r = 0; r < s.length; r++) {
      count.set(s[r], (count.get(s[r]) ?? 0) + 1);
      max_freq = Math.max(max_freq, count.get(s[r]));
      while (r - l + 1 - max_freq > k) {
        count.set(s[l], count.get(s[l]) - 1);
        l++;
      }
      result = Math.max(result, r - l + 1);
    }
    return result;
  }
}
