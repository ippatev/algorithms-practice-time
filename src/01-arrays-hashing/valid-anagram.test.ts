import { describe, expect, it } from 'vitest'
import { isAnagram } from './valid-anagram'

describe('isAnagram', () => {
  it('returns true for a simple anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
  })

  it('returns false when letters differ', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  })

  it('returns false when lengths differ', () => {
    expect(isAnagram('ab', 'a')).toBe(false)
  })

  it('returns true for two empty strings', () => {
    expect(isAnagram('', '')).toBe(true)
  })

  it('accounts for repeated letters correctly', () => {
    expect(isAnagram('aacc', 'ccac')).toBe(false)
  })
})
