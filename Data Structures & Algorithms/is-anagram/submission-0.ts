class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const hasMapofS = new Map();
        const hasMapofT = new Map();
        if (s.length !== t.length) {
            return false;
        }
        for (let char of s) {
            if (hasMapofS.has(char)) {
                hasMapofS.set(char, hasMapofS.get(char) + 1);
            } else {
                hasMapofS.set(char, 1);
            }
        }
        for (let char of t) {
            if (hasMapofT.has(char)) {
                hasMapofT.set(char, hasMapofT.get(char) + 1);
            } else {
                hasMapofT.set(char, 1);
            }
        }
        for (let char of t) {
            if (hasMapofS.get(char) !== hasMapofT.get(char)) {
                return false;
            }
        }
        return true;
    }
}
