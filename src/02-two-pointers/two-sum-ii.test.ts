import { describe, expect, it } from 'vitest'
import { twoSumSorted } from './two-sum-ii'

describe('twoSumSorted', () => {
  it('finds indices of two numbers that add up to target', () => {
    expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([1, 2])
  })

  it('works when the answer is not at the start', () => {
    expect(twoSumSorted([2, 3, 4], 6)).toEqual([1, 3])
  })

  it('handles negative numbers', () => {
    expect(twoSumSorted([-1, 0], -1)).toEqual([1, 2])
  })

  it('works on a larger array', () => {
    expect(twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8)).toEqual([4, 5])
  })

  it('handles duplicate values', () => {
    expect(twoSumSorted([2, 2, 3, 4], 6)).toEqual([1, 4])
  })
})
