class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  replaceElements(arr: number[]): number[] {
    let max = -Infinity;
    let len = arr.length;
    let res = new Array(len);
    for (let right = len - 2; right >= 0; right--) {
      res[right] = max = Math.max(arr[right + 1], max);
    }
    res[len - 1] = -1;
    return res;
  }
}
