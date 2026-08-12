import { describe, expect, it } from 'vitest'
import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters'

describe('lengthOfLongestSubstring', () => {
  it('finds the longest substring for a typical case', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
  })

  it('handles a string of all the same character', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
  })

  it('handles a repeat that is not adjacent to the start', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
  })

  it('handles an empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  it('handles a single character', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1)
  })
})
