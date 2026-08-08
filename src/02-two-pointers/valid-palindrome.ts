/**
 * https://leetcode.com/problems/valid-palindrome/
 */
export function isPalindrome(_s: string): boolean {
  const length = _s.length;
  let l = 0;
  let r = length - 1;

  const isValidSymbol = (s: number) =>
    (s >= 97 && s <= 122) || (s >= 48 && s <= 57);

  while (l < r) {
    const lsl = _s[l].toLowerCase();
    const lsr = _s[r].toLowerCase();

    if (!isValidSymbol(lsl.charCodeAt(0))) {
      l++;
      continue;
    }

    if (!isValidSymbol(lsr.charCodeAt(0))) {
      r--;
      continue;
    }

    if (lsl === lsr) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;

  throw new Error("not implemented");
}
