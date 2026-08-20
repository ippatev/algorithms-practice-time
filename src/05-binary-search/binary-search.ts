/**
 * https://leetcode.com/problems/binary-search/
 */
export function search(_nums: number[], _target: number): number {
  let left = 0;
  let right = _nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (_nums[mid] == _target) {
      return mid;
    } else if (_nums[mid] < _target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
