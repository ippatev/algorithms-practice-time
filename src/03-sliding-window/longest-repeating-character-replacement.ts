/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 */
export function characterReplacement(_s: string, _k: number): number {
  let freq = new Map<string, number>();
  let maxFreq = 0;
  let left = 0;
  let res = 0;

  for (let right = 0; right < _s.length; right++) {
    const current = _s[right];
    const winSize = right - left + 1;

    freq.set(current, (freq.get(current) ?? 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(current)!);

    if (winSize - maxFreq > _k) {
      freq.set(_s[left], freq.get(_s[left])! - 1);
      left += 1;
    }

    res = Math.max(res, right - left + 1);
  }

  return res;

  throw new Error("not implemented");
}
