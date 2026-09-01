class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s: string): boolean {
    let arr = [];
    const pairs: Record<string, string> = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    const pairValues = Object.values(pairs);

    for (let char of s) {
      if (pairValues.includes(char)) {
        arr.push(char);
      } else {
        if (arr.pop() !== pairs[char]) {
          return false;
        }
      }
    }
    return arr.length === 0;
  }
}
