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

    for (let char of s) {
      if (char === "(" || char === "[" || char === "{") {
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
