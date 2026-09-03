class Solution {
  /**
   * @param {string} path
   * @return {boolean}
   */
  isPathCrossing(path: string): boolean {
    const visited = new Map();

    let x = 0;
    let y = 0;

    // Store the starting point
    visited.set(`${x},${y}`, true);

    for (const direction of path) {
      if (direction === "N") y++;
      else if (direction === "S") y--;
      else if (direction === "E") x++;
      else if (direction === "W") x--;

      const key = `${x},${y}`;

      // Already visited
      if (visited.has(key)) {
        return true;
      }

      visited.set(key, true);
    }

    return false;
  }
}
