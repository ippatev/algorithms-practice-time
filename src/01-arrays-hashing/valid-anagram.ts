/**
 * https://leetcode.com/problems/valid-anagram/
 */
export function isAnagram(_s: string, _t: string): boolean {
  const w = new Map<string, number>();

  if (_s.length === 0 && _t.length === 0) {
    return true;
  } else if (_s.length !== _t.length) {
    return false;
  }

  for (let l of _s) {
    if (w.has(l)) {
      w.set(l, w.get(l)! + 1);
    } else {
      w.set(l, 1);
    }
  }

  for (let l of _t) {
    if (w.has(l)) {
      if (w.get(l)! <= 0) {
        return false;
      }

      w.set(l, w.get(l)! - 1);
    } else {
      return false;
    }
  }

  return true;

  throw new Error("not implemented");
}
