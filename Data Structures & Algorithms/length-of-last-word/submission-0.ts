class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        return s.trim().split(' ').at(-1).length
    }
}
