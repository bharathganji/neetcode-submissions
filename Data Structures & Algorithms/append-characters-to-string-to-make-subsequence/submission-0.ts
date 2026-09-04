class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
         let t_index = 0,
      t_max_index = t.length;
    for (let i = 0; i < s.length; i++) {
      if (t_index === t_max_index) {
        return 0;
      }
      if (s[i] === t[t_index]) {
        t_index++;
      }
    }
    if (t_index === t_max_index) {
      return 0;
    }
    return t_max_index - t_index;
  
    }
}
