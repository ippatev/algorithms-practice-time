import { describe, expect, it } from 'vitest'
import { isPalindrome } from './valid-palindrome'

describe('isPalindrome', () => {
  it('returns true for a phrase with punctuation and mixed case', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  it('returns false for a non-palindrome phrase', () => {
    expect(isPalindrome('race a car')).toBe(false)
  })

  it('returns true for an empty string', () => {
    expect(isPalindrome('')).toBe(true)
  })

  it('returns true when only non-alphanumeric characters are present', () => {
    expect(isPalindrome(', . !')).toBe(true)
  })

  it('treats letters and digits together correctly', () => {
    expect(isPalindrome('0P')).toBe(false)
  })
})
