/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 */
export function searchMatrix(_matrix: number[][], _target: number): boolean {
  let n = _matrix[0].length,
    left = 0,
    right = _matrix[0].length * _matrix.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2),
      row = Math.floor(mid / n),
      col = mid % n,
      val = _matrix[row][col];

    if (val === _target) {
      return true;
    } else if (val < _target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
