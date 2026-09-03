class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  minOperations(s: string): number {
    let length = s.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
      let expected = i % 2 == 0 ? "0" : "1";
      if (s[i] !== expected) count++;
    }
    return Math.min(count, length - count);
  }
}
