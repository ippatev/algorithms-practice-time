/**
 * https://leetcode.com/problems/group-anagrams/
 */
export function groupAnagrams(_strs: string[]): string[][] {
  const g = new Map<string, string[]>();

  for (let str of _strs) {
    const c = [...str].sort().toString();

    if (g.has(c)) {
      g.get(c)?.push(str);
    } else {
      g.set(c, [str]);
    }
  }

  return [...g.values()];

  throw new Error("not implemented");
}
