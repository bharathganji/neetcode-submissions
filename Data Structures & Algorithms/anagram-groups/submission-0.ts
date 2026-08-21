class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]): string[][] {
    function frequency(str: string): number[] {
      const result = Array(26).fill(0);
      for (let i = 0, len = str.length; i < len; i++) {
        result[str.charCodeAt(i) - 97]++;
      }
      return result;
    }

    const customMap = new Map();
    for (let i of strs) {
      const freq = frequency(i).join("#");
      if (!customMap.has(freq)) {
        customMap.set(freq, []);
      }
      customMap.get(freq).push(i);
    }
    return Array.from(customMap.values());
  }
}
