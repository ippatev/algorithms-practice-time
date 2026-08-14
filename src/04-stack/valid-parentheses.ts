/**
 * https://leetcode.com/problems/valid-parentheses/
 */
export function isValid(_s: string): boolean {
  const validSymbol = new Map<string, string>([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  let stack: string[] = [];

  for (let i = 0; i < _s.length; i++) {
    const current = _s[i];

    if (
      validSymbol.has(current) &&
      stack[stack.length - 1] === validSymbol.get(current)
    ) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  return !stack.length;

  throw new Error("not implemented");
}
