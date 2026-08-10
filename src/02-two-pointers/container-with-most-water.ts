/**
 * https://leetcode.com/problems/container-with-most-water/
 */
export function maxArea(_height: number[]): number {
  const len = _height.length;
  let l = 0;
  let r = len - 1;
  let max = 0;

  const sum = (l: number, r: number) => {
    return Math.min(_height[l], _height[r]) * (r - l);
  };

  while (l < r) {
    max = Math.max(max, sum(l, r));

    if (_height[l] < _height[r]) {
      l++;
      continue;
    } else {
      r--;
      continue;
    }
  }

  return max;

  throw new Error("not implemented");
}
