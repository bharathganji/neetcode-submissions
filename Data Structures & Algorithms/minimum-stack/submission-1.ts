class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  /**
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.stack.push(val);

    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop(): void {
    const val = this.stack.pop()!;

    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  /**
   * @return {number}
   */
  top(): number {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
