class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
      if (token === "+" || token === "-" || token === "*" || token === "/") {
        const value1 = stack.pop()!;
        const value2 = stack.pop()!;

        switch (token) {
          case "+":
            stack.push(value2 + value1);
            break;
          case "-":
            stack.push(value2 - value1);
            break;
          case "*":
            stack.push(value2 * value1);
            break;
          case "/":
            stack.push(Math.trunc(value2 / value1));
            break;
        }
      } else {
        stack.push(Number(token));
      }
    }

    return stack.pop()!;
  }
}
