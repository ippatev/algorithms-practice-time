/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
export function twoSumSorted(_numbers: number[], _target: number): number[] {
  const length = _numbers.length;
  let left = 0;
  let right = length - 1;

  while (left < right) {
    const lval = _numbers[left];
    const rval = _numbers[right];

    if (lval + rval > _target) {
      right--;
      continue;
    } else if (lval + rval < _target) {
      left++;
      continue;
    }

    return [left + 1, right + 1];
  }

  throw new Error("not implemented");
}
