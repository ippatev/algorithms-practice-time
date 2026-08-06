/**
 * https://leetcode.com/problems/two-sum/
 */
export function twoSum(_nums: number[], _target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < _nums.length; i++) {
    const complement = _target - _nums[i];

    if (seen.has(_nums[i])) {
      return [seen.get(_nums[i])!, i];
    }

    seen.set(complement, i);
  }

  throw new Error("not implemented");
}
