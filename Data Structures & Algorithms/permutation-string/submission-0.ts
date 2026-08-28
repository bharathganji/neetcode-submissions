class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  mapsAreEqual(map1, map2): boolean {
    // 1. Check if they have the same number of items
    if (map1.size !== map2.size) return false;

    // 2. Verify every key exists in both and has the same value
    for (let [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) {
        return false;
      }
    }

    return true;
  }
  getFreq(value: String) {
    return Array.from(value).reduce(
      (acc, curr) => acc.set(curr, (acc.get(curr) ?? 0) + 1),
      new Map(),
    );
  }

  checkInclusion(s1: string, s2: string): boolean {
    let left = 0;

    const map = this.getFreq(s1);

    for (let right = s1.length - 1; right < s2.length; right++) {
      let windowFreq = this.getFreq(s2.slice(left, right + 1));
      if (this.mapsAreEqual(map, windowFreq)) {
        return true;
      }
      left++;
    }
    return false;
  }
}
