import { describe, expect, it } from 'vitest'
import { isValid } from './valid-parentheses'

describe('isValid', () => {
  it('returns true for simple matching brackets', () => {
    expect(isValid('()')).toBe(true)
  })

  it('returns true for multiple bracket types in sequence', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  it('returns false for mismatched bracket types', () => {
    expect(isValid('(]')).toBe(false)
  })

  it('returns false for incorrectly nested brackets', () => {
    expect(isValid('([)]')).toBe(false)
  })

  it('returns true for correctly nested brackets', () => {
    expect(isValid('{[]}')).toBe(true)
  })

  it('returns false for an unclosed bracket', () => {
    expect(isValid('(')).toBe(false)
  })
})
