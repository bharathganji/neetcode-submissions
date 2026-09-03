class Solution {
  /**
   * @param {number[]} nums
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  sortColors(nums: number[]): void {
    let left = 0;
    let mid = 0;
    let right = nums.length - 1;

    while (mid <= right) {
      if (nums[mid] === 0) {
        // swap(mid, right);

        [nums[mid], nums[left]] = [nums[left], nums[mid]];
        mid++;
        left++;
      } else if (nums[mid] === 2) {
        [nums[mid], nums[right]] = [nums[right], nums[mid]];
        right--;
      } else {
        mid++;
      }
    }
  }
}
