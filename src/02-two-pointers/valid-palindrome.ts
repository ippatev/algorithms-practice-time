/**
 * https://leetcode.com/problems/valid-palindrome/
 */
export function isPalindrome(_s: string): boolean {
  const a = [..._s]
    .map((sn) => sn.trim())
    .filter((sn) => sn.length > 0)
    .map((sn) => sn.toLowerCase())
    .filter((sn) => {
      if (!sn) return null;

      const ch = sn.charCodeAt(0);

      return (ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57);
    });

  return JSON.stringify(a) === JSON.stringify(a.toReversed());

  throw new Error("not implemented");
}
