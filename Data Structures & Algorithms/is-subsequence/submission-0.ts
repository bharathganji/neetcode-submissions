class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isSubsequence(s: string, t: string): boolean {
    // const freq = new Array(26).fill(0);
    // for (let i = 0; i < s.length; i++) {
    //   freq[s.toLowerCase().charCodeAt(i) - 97]++;
    // }
    // for (let i = 0; i < t.length; i++) {
    //   freq[t.toLowerCase().charCodeAt(i) - 97]--;
    // }
    // for (let i = 0; i < s.length; i++) {
    //   if (freq[s.toLowerCase().charCodeAt(i) - 97] === -1) {
    //     return false;
    //   }
    // }
    // return true;
    let s_index = 0,
      s_max_index = s.length;
    for (let i = 0; i < t.length; i++) {
      if (t[i] === s[s_index]) {
        s_index++;
      }
    }
    if (s_index >= s_max_index) {
      return true;
    }
    return false;
  }
}
