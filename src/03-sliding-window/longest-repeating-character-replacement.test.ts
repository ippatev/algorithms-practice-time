import { describe, expect, it } from 'vitest'
import { characterReplacement } from './longest-repeating-character-replacement'

describe('characterReplacement', () => {
  it('finds the longest window for a typical case', () => {
    expect(characterReplacement('ABAB', 2)).toBe(4)
  })

  it('handles a single replacement in the middle of a run', () => {
    expect(characterReplacement('AABABBA', 1)).toBe(4)
  })

  it('handles zero allowed replacements', () => {
    expect(characterReplacement('AAAA', 0)).toBe(4)
  })

  it('handles a string with no repeats and one replacement', () => {
    expect(characterReplacement('ABCDE', 1)).toBe(2)
  })
})
