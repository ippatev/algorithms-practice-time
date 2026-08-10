import { describe, expect, it } from 'vitest'
import { maxArea } from './container-with-most-water'

describe('maxArea', () => {
  it('finds the max area for a typical case', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
  })

  it('handles the smallest possible input', () => {
    expect(maxArea([1, 1])).toBe(1)
  })

  it('prefers the wider container over taller inner walls', () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16)
  })

  it('handles a dip in the middle', () => {
    expect(maxArea([1, 2, 1])).toBe(2)
  })
})
