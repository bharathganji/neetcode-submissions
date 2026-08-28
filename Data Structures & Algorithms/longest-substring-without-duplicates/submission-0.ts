class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s: string): number {
    let left = 0;
    const set = new Set();
    let max_len = 0;

    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
      max_len = Math.max(max_len, right - left + 1);
    }
    return max_len;
  }
}
