/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */
export function evalRPN(_tokens: string[]): number {
  const stack: number[] = [];
  const mSymbols = new Set<string>(["+", "-", "*", "/"]);

  for (let i = 0; i < _tokens.length; i++) {
    const curr = _tokens[i];

    if (mSymbols.has(curr)) {
      const a = stack.pop();
      const b = stack.pop();

      stack.push(Math.trunc(+eval(`${b}${curr}${a}`)));

      continue;
    }

    stack.push(+curr);
  }

  return stack[0];

  throw new Error("not implemented");
}
