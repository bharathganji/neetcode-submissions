class Solution {
  /**
   * @param {string[]} words
   * @return {string[]}
   */
  stringMatching(words: string[]): string[] {
    return words.filter((word, index) =>
      words.some((value, i) => i !== index && value.includes(word)),
    );
  }
}
