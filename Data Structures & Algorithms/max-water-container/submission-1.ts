class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights: number[]): number {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;
    while (left < right) {
      let diff = right - left;
      max = Math.max(diff * Math.min(heights[left], heights[right]), max);
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
    return max;
  }
}
