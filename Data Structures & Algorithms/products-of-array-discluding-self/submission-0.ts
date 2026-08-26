class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const output = new Array(n);
    output[0] = 1;
    for (let i = 1; i < n; i++) {
      output[i] = output[i - 1] * nums[i - 1];
    }
    let rightproduct = 1;
    for (let i = n - 1; i >= 0; i--) {
      output[i] *= rightproduct;
      rightproduct *= nums[i];
    }
    return output;
  }
}
