class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arrSet = new Set();
        for (let i of nums){
            if(arrSet.has(i)){
                return true
            }
            else {
                arrSet.add(i)
            }
        }
        return false
    }
}
