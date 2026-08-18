/**
 * https://leetcode.com/problems/daily-temperatures/
 */
export function dailyTemperatures(_temperatures: number[]): number[] {
  const stack: number[] = [];
  const res: number[] = new Array(_temperatures.length).fill(0);

  for (let i = 0; i < _temperatures.length; i++) {
    while (
      stack.length > 0 &&
      _temperatures[i] > _temperatures[stack[stack.length - 1]]
    ) {
      const idx = stack.pop();
      res[idx!] = i - idx!;
    }

    stack.push(i);
  }

  return res;

  throw new Error("not implemented");
}
