/**
 * https://leetcode.com/problems/min-stack/
 */
export class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(_val: number): void {
    this.stack.push(_val);

    const minStackMin = this.minStack[this.minStack.length - 1] ?? _val;

    this.minStack.push(Math.min(_val, minStackMin));
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];

    throw new Error("not implemented");
  }
}
