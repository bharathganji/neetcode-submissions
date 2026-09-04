class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  replaceElements(arr: number[]): number[] {
    let max = -Infinity;
    let res = new Array(arr.length);
    for (let right = arr.length - 2; right >= 0; right--) {
      max = Math.max(arr[right+1], max);

      res[right] = max;
    }
    res[arr.length - 1] = -1;
    return res;
  }
}
