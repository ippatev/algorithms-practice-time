import { describe, expect, it } from 'vitest'
import { search } from './binary-search'

describe('search', () => {
  it('finds a target in the middle of the array', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
  })

  it('returns -1 when the target is not present', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
  })

  it('finds a target at the first index', () => {
    expect(search([-1, 0, 3, 5, 9, 12], -1)).toBe(0)
  })

  it('finds a target at the last index', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 12)).toBe(5)
  })

  it('handles a single-element array', () => {
    expect(search([5], 5)).toBe(0)
  })
})
