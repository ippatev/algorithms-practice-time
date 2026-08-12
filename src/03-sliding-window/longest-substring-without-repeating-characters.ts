/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
export function lengthOfLongestSubstring(_s: string): number {
  const len = _s.length;
  const lon = new Map<string, number>();
  let l = 0;
  let maxL = 0;

  for (let r = 0; r < len; r++) {
    const ri = _s[r];

    if (lon.has(ri)) {
      l = Math.max(l, lon.get(ri)! + 1);
      lon.set(ri, r);
    } else {
      lon.set(ri, r);
    }
    maxL = Math.max(r - l + 1, maxL);
  }

  return maxL;

  throw new Error("not implemented");
}
